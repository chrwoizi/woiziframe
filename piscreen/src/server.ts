import * as express from 'express';
import { setInterval } from 'timers';
import { environment } from './environments/environment';
import { gpioMock } from './GpioMock';
import { ScreenSwitch } from './ScreenSwitch';
import { Sensor } from './Sensor';
const server = express();
const bodyParser = require('body-parser');

const log = console.log;
console.log = (...args) => {
  log(new Date().toISOString(), ...args);
};

server.use(bodyParser.json());

let isOn = false;
function setIsOn(value: boolean) {
  isOn = value;
  console.log('screen is ' + (isOn ? 'on' : 'off'));
}

server.get('/on', async (req, res) => {
  try {
    const stdout = await ScreenSwitch.on();
    setIsOn(true);
    res.json({ status: stdout });
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

server.get('/off', async (req, res) => {
  try {
    const stdout = await ScreenSwitch.off();
    setIsOn(false);
    res.json({ status: stdout });
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

server.get('/status', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ on: isOn });
});

console.log(
  'Server is running on ' + environment.host + ':' + environment.port
);

server.listen(environment.port, environment.host);

(async () => {
  try {
    const sensor = new Sensor(
      environment.sensorPin,
      environment.sensorInterval
    );

    sensor.on('movement', function () {
      console.log('motion sensor detects movement');
      ScreenSwitch.on().then((x) => {
        if (x.message) console.log(x.message);
        if (!x.isDelayed && x.success) setIsOn(true);
      });
    });

    sensor.on('stillness', function () {
      console.log('motion sensor detects stillness');
      ScreenSwitch.off().then((x) => {
        if (x.message) console.log(x.message);
        if (!x.isDelayed && x.success) setIsOn(false);
      });
    });

    console.log('initializing sensor on pin ' + environment.sensorPin);
    await sensor.start();
    console.log('sensor is ready');
  } catch (e) {
    console.error(e);
  }
})();

if (environment.mockSensor) {
  setInterval(
    () => (gpioMock.value = !gpioMock.value),
    environment.mockSensorInterval
  );
}
