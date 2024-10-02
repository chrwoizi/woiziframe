export class GpioMock {
  value?: boolean;
  getInstantLineValue(device, pin) {
    return this.value ? 1 : 0;
  }
}

export const gpioMock = new GpioMock();
