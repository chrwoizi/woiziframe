import { exec } from 'child_process';
import { environment } from './environments/environment.dev';

export interface ScreenSwitchResult {
  isDelayed: boolean;
  success?: boolean;
  message?: string;
}

export class ScreenSwitch {
  static onTime?: Date;
  static offTimer?: NodeJS.Timeout;
  static isOn = false;

  static async on() {
    return new Promise<ScreenSwitchResult>((resolve, reject) => {
      this.onTime = new Date();
      if (this.offTimer) {
        clearTimeout(this.offTimer);
        this.offTimer = undefined;
      }
      if (!this.isOn) {
        this.isOn = true;
        console.log(environment.onCommand);
        exec(environment.onCommand, (error, stdout, stderr) => {
          if (error) {
            reject(error);
          } else if (stderr) {
            reject(new Error(stderr.trim()));
          } else {
            this.isOn = true;
            if (stdout)
              resolve({
                isDelayed: false,
                success: true,
                message: stdout.trim(),
              });
          }
        });
      } else {
        resolve({
          isDelayed: false,
          success: true,
          message: 'screen was already on',
        });
      }
    });
  }

  static async off() {
    return new Promise<ScreenSwitchResult>((resolve, reject) => {
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
          resolve({
            isDelayed: true,
            message:
              'minimum on duration not exceeded yet. switching off in ' +
              (environment.minOnDuration - onDuration) +
              'ms',
          });
          return;
        }
      }

      if (this.isOn) {
        this.isOn = false;
        console.log(environment.offCommand);
        exec(environment.offCommand, (error, stdout, stderr) => {
          if (error) {
            reject(error);
          } else if (stderr) {
            reject(new Error(stderr.trim()));
          } else {
            this.isOn = false;
            if (stdout)
              resolve({
                isDelayed: false,
                success: true,
                message: stdout.trim(),
              });
          }
        });
      } else {
        resolve({
          isDelayed: false,
          success: true,
          message: 'screen was already off',
        });
      }
    });
  }
}
