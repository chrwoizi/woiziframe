import { DirectionsWaypointType } from './DirectionsWaypointType';

export interface DirectionsWaypoint {
  geocoder_status: 'OK';
  place_id: string;
  types: DirectionsWaypointType[];
}
