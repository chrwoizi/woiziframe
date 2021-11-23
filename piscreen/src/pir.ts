import { environment as devEnvironment } from './environments/environment';
import { environment as prodEnvironment } from './environments/environment.prod';
import { Sensor } from './Sensor';
import { ScreenSwitch } from './ScreenSwitch';

const log = console.log;
console.log = (...args) => {
  log(new Date().toISOString(), ...args);
};

let environment = devEnvironment;
if (process.env.NODE_ENV === 'production') {
  for (let key of Object.getOwnPropertyNames(devEnvironment))
    delete devEnvironment[key];
  Object.assign(devEnvironment, prodEnvironment);

  environment = prodEnvironment;
  console.log('PROD');
}

(async () => {
  try {
    console.log('initializing on pin ' + environment.sensorPin);

    const sensor = new Sensor(
      environment.sensorPin,
      environment.sensorInterval
    );

    sensor.on('movement', function () {
      console.log('motion sensor detects movement');
      ScreenSwitch.on().then((x) => {
        if (x) console.log(x);
      });
    });

    sensor.on('stillness', function () {
      console.log('motion sensor detects stillness');
      ScreenSwitch.off().then((x) => {
        if (x) console.log(x);
      });
    });

    console.log('starting...');
    await sensor.start();
    console.log('ready');
  } catch (e) {
    console.error(e);
  }
})();
