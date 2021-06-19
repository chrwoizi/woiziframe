import { WeatherDaily } from './WeatherDaily';
import { WeatherHourly } from './WeatherHourly';
import { WeatherMinutely } from './WeatherMinutely';
import { WeatherCurrent } from './WeatherCurrent';

export interface Weather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: WeatherCurrent;
  minutely: WeatherMinutely[];
  hourly: WeatherHourly[];
  daily: WeatherDaily[];
}
