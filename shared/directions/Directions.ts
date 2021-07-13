import { DirectionsWaypoint } from './DirectionsWaypoint';
import { DirectionsRoute } from './DirectionsRoute';

export interface Directions {
  status: 'OK' | 'NOT_FOUND';
  geocoded_waypoints: DirectionsWaypoint[];
  routes: DirectionsRoute[];
}
