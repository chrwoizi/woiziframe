import { DirectionsQuery } from './DirectionsQuery';
import { Directions } from './Directions';

export interface WorkDirection {
  query: DirectionsQuery;
  directions: Directions;
}
