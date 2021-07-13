import { DirectionsLocation } from './DirectionsLocation';
import { DirectionsValue } from './DirectionsValue';
import { DirectionsStep } from './DirectionsStep';
import { DirectionsTime } from './DirectionsTime';

export interface DirectionsLeg {
  arrival_time?: DirectionsTime;
  departure_time?: DirectionsTime;
  steps: DirectionsStep[];
  traffic_speed_entry: unknown[];
  via_waypoint: unknown[];
  duration: DirectionsValue;
  duration_in_traffic?: DirectionsValue;
  distance: DirectionsValue;
  start_location: DirectionsLocation;
  end_location: DirectionsLocation;
  start_address: string;
  end_address: string;
}
