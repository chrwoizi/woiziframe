import { DirectionsLocation } from './DirectionsLocation';
import { DirectionsLeg } from './DirectionsLeg';

export interface DirectionsRoute {
  summary: string;
  legs: DirectionsLeg[];
  copyrights: string;
  overview_polyline: {
    points: string;
  };
  warnings: unknown[];
  waypoint_order: number[];
  bounds: {
    southwest: DirectionsLocation;
    northeast: DirectionsLocation;
  };
}
