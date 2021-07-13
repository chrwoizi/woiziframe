import { DirectionsLocation } from './DirectionsLocation';
import { DirectionsTransitDetails } from './DirectionsTransitDetails';
import { DirectionsValue } from './DirectionsValue';

export interface DirectionsStep {
  travel_mode: 'DRIVING' | 'WALKING' | 'TRANSIT';
  start_location: DirectionsLocation;
  end_location: DirectionsLocation;
  polyline: {
    points: string;
  };
  duration: DirectionsValue;
  html_instructions: string;
  maneuver?:
    | 'turn-left'
    | 'turn-right'
    | 'ramp-left'
    | 'ramp-right'
    | 'fork-left'
    | 'fork-right'
    | 'keep-left'
    | 'keep-right'
    | 'roundabout-left'
    | 'roundabout-right'
    | 'turn-slight-left'
    | 'turn-slight-right'
    | 'merge';
  distance: DirectionsValue;
  steps?: DirectionsStep[];
  transit_details?: DirectionsTransitDetails;
}
