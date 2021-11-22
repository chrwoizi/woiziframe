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
  try {
    const sensor = new Sensor(
      environment.sensorPin,
      environment.sensorInterval
    );

    sensor.on('movement', function () {
      console.log('on');
      ScreenSwitch.on().then(console.log);
    });

    sensor.on('stillness', function () {
      console.log('off');
      ScreenSwitch.off().then(console.log);
    });

    console.log('starting...');
    await sensor.start();
    console.log('ready');
  } catch (e) {
    console.error(e);
  }
})();
