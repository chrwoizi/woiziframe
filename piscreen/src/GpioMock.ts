export class GpioMock {
  value?: boolean;
  setMode(mode) {}
  setup(pin, direction, onSetup) {
    onSetup(null, null);
  }
  read(channel, cb) {
    cb(null, this.value);
  }
  MODE_RPI: undefined;
  DIR_IN: undefined;
}

export const gpioMock = new GpioMock();
