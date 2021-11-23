import { exec } from 'child_process';
import { environment } from './environments/environment';

export class ScreenSwitch {
  static onTime?: Date;
  static timer?: NodeJS.Timeout;

  //private static onCommand = 'xset dpms force on';
  private static onCommand = 'sudo tvservice -p && sudo chvt 2 && sudo chvt 7';

  //private static offCommand = 'xset dpms force off';
  private static offCommand = 'sudo tvservice -o';

  static async on() {
    return new Promise<string>((resolve, reject) => {
      this.onTime = new Date();
      console.log(this.onCommand);
      exec(this.onCommand, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else if (stderr) {
          reject(new Error(stderr));
        } else {
          if (stdout) resolve(stdout);
        }
      });
    });
  }

  static async off() {
    return new Promise<string>((resolve, reject) => {
      if (this.onTime) {
        const onDuration = new Date().getTime() - this.onTime.getTime();
        if (onDuration < environment.minOnDuration) {
          if (this.timer) {
            clearTimeout(this.timer);
            this.timer = undefined;
          }
          this.timer = setTimeout(() => {
            this.timer = undefined;
            this.off();
          }, environment.minOnDuration - onDuration);
          resolve(
            'minimum on duration not exceeded yet. switching off in ' +
              (environment.minOnDuration - onDuration) +
              'ms'
          );
          return;
        }
      }

      console.log(this.offCommand);
      exec(this.offCommand, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else if (stderr) {
          reject(new Error(stderr));
        } else {
          if (stdout) resolve(stdout);
        }
      });
    });
  }
}
