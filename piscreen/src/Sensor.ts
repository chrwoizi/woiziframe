import { EventEmitter } from 'events';
import { environment } from './environments/environment';
import { gpioMock } from './GpioMock';
var gpiod = require('node-libgpiod');

const g = environment.mockSensor ? gpioMock : gpiod;
if (environment.mockSensor) {
  console.log('mocking gpio');
}
else {
  console.log('using gpio');
}

export class Sensor extends EventEmitter {
  movement = false;
  lastMovement?: Date = undefined;

  private interval?: NodeJS.Timeout = undefined;

  constructor(private device: string, private pin: number, private loop = 1500) {
    super();

    this.movement = false;
    this.lastMovement = undefined;
    this.interval = undefined;
  }

  async start() {
    this.interval = setInterval(() => this.readPir(), this.loop);
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
    const value = g.getInstantLineValue(this.device, this.pin) == 1 ? true : false;
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
  }
}
