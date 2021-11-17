import { environment as devEnvironment } from './environments/environment';
import { environment as prodEnvironment } from './environments/environment.prod';
import { Sensor } from './Sensor';
import { ScreenSwitch } from './ScreenSwitch';

let environment = devEnvironment;
if (process.env.NODE_ENV === 'production') {
  for (let key of Object.getOwnPropertyNames(devEnvironment))
    delete devEnvironment[key];
  Object.assign(devEnvironment, prodEnvironment);

  environment = prodEnvironment;
  console.log('PROD');
}

(async () => {
  const sensor = new Sensor(environment.sensorPin, environment.sensorInterval);

  sensor.on('movement', function () {
    ScreenSwitch.on();
  });

  sensor.on('stillness', function () {
    ScreenSwitch.off();
  });

  await sensor.start();
})();
