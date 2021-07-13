import { environment } from './environments/environment';
import { Directions } from '../../shared/directions/Directions';
import { mock } from '../../shared/directions/Directions.mock';
import * as request from 'request-promise-native';
import * as moment from 'moment';
import { DirectionsMode } from '../../shared/directions/DirectionsMode';

export async function loadDirections(
  destination: string,
  origin?: string,
  arrivalTime?: Date,
  mode?: DirectionsMode
): Promise<Directions> {
  if (environment.directions.mockDirections) {
    return mock.find((x) => x.query.mode === mode)?.directions;
  }

  const departure_time = `&departure_time=now`;

  const arrival_time = arrivalTime
    ? `&arrival_time=${Math.floor(arrivalTime.getTime() / 1000)}`
    : '';

  let time: string;
  if (
    moment().diff(arrivalTime, 'hours', true) <
      environment.directions.getTrafficIfArrivalTimeIsInHours ??
    0
  ) {
    time = departure_time;
  } else {
    time = arrival_time;
  }

  const location =
    origin ??
    environment.locationLatitude + ',' + environment.locationLongitude;

  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
    location
  )}&destination=${encodeURIComponent(destination)}${time}&language=${
    environment.locale
  }&mode=${mode || 'driving'}&key=${
    environment.directions.googleDirectionsApiKey
  }`;
  console.log(url);

  const response = JSON.parse(await request(url)) as Directions;
  if (response.status === 'OK') return response;
  return undefined;
}
