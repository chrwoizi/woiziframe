import { exec } from 'child_process';
import { environment } from './environments/environment';

export class ScreenSwitch {
  static onTime?: Date;
  static offTimer?: NodeJS.Timeout;
  static isOn = false;

  //private static onCommand = 'xset dpms force on';
  private static onCommand = 'sudo tvservice -p && sudo chvt 2 && sudo chvt 7';

  //private static offCommand = 'xset dpms force off';
  private static offCommand = 'sudo tvservice -o';

  static async on() {
    return new Promise<string>((resolve, reject) => {
      this.onTime = new Date();
      if (this.offTimer) {
        clearTimeout(this.offTimer);
        this.offTimer = undefined;
      }
      if (!this.isOn) {
        this.isOn = true;
        console.log(this.onCommand);
        exec(this.onCommand, (error, stdout, stderr) => {
          if (error) {
            reject(error);
          } else if (stderr) {
            reject(new Error(stderr.trim()));
          } else {
            this.isOn = true;
            if (stdout) resolve(stdout.trim());
          }
        });
      } else {
        resolve(undefined);
      }
    });
  }

  static async off() {
    return new Promise<string>((resolve, reject) => {
      if (this.onTime) {
        const onDuration = new Date().getTime() - this.onTime.getTime();
        if (onDuration < environment.minOnDuration) {
          if (this.offTimer) {
            clearTimeout(this.offTimer);
            this.offTimer = undefined;
          }
          this.offTimer = setTimeout(() => {
            this.offTimer = undefined;
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

      if (this.isOn) {
        this.isOn = false;
        console.log(this.offCommand);
        exec(this.offCommand, (error, stdout, stderr) => {
          if (error) {
            reject(error);
          } else if (stderr) {
            reject(new Error(stderr.trim()));
          } else {
            this.isOn = false;
            if (stdout) resolve(stdout.trim());
          }
        });
      } else {
        resolve(undefined);
      }
    });
  }
}
