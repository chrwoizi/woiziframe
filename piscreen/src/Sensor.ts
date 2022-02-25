import gpio from 'rpi-gpio';
import { EventEmitter } from 'events';
import { environment } from './environments/environment';
import { gpioMock } from './GpioMock';

const g = environment.mockSensor ? gpioMock : gpio;
if (environment.mockSensor) {
  console.log('mocking gpio');
}

export class Sensor extends EventEmitter {
  movement = false;
  lastMovement?: Date = undefined;

  private interval?: NodeJS.Timeout = undefined;

  constructor(private pin: number, private loop = 1500) {
    super();

    this.movement = false;
    this.lastMovement = undefined;
    this.interval = undefined;
  }

  async start(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      g.setMode(g.MODE_RPI);

      g.setup(this.pin, g.DIR_IN, (err?: Error | null, value?: boolean) => {
        if (err) {
          reject(err);
          return undefined;
        }

        this.interval = setInterval(() => this.readPir(), this.loop);
        resolve();

        return this.interval;
      });
    });
  }

  stop() {
    if (!this.interval) {
      return false;
    }

    clearInterval(this.interval);
    this.interval = undefined;

    return true;
  }

  readPir() {
    g.read(this.pin, (err?: Error | null, value?: boolean) => {
      if (err) {
        console.error(err);
      }

      if (value === this.movement) {
        return;
      }

      this.movement = value;

      if (this.movement === true) {
        this.lastMovement = new Date();
        this.emit('movement');
      } else if (this.movement === false) {
        this.lastMovement = new Date();
        this.emit('stillness');
      }
    });
  }
}
