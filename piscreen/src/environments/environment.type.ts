export interface Environment {
  production: boolean;
  host: string;
  port: number;
  minOnDuration: number;
  sensorPin: number;
  sensorInterval: number;
}
