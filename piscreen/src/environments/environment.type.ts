export interface Environment {
  production: boolean;
  host: string;
  port: number;
  minOnDuration: number;
  sensorPin: number;
  sensorInterval: number;
  mockSensor: boolean;
  mockSensorInterval?: number;
  onCommand: string;
  offCommand: string;
}
