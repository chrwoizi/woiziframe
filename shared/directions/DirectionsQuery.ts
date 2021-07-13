import { DirectionsMode } from './DirectionsMode';

export interface DirectionsQuery {
  name: string;
  origin: string;
  destination: string;
  mode: DirectionsMode;
  weekdays: number[];
  fromHours: number;
  toHours: number;
}
