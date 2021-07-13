import { DirectionsLocation } from './DirectionsLocation';

export interface DirectionsTransitDetails {
  arrival_stop: {
    location: DirectionsLocation;
    name: string;
  };
  arrival_time: {
    text: string;
    time_zone: string;
    value: number;
  };
  departure_stop: {
    location: DirectionsLocation;
    name: string;
  };
  departure_time: {
    text: string;
    time_zone: string;
    value: number;
  };
  headsign: string;
  line: {
    agencies: { name: string; url: string }[];
    short_name: string;
    vehicle: {
      icon: string;
      local_icon?: string;
      name: string;
      type: 'BUS' | 'HEAVY_RAIL';
    };
  };
  num_stops: number;
}
