import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Directions } from '../../../../shared/directions/Directions';
import { i18n } from '../../../../shared/i18n';

export function getDuration(directions: Directions) {
  const routes = directions?.routes;
  if (routes && routes.length > 0) {
    const legs = routes[0].legs;
    if (legs.length > 0) {
      const value =
        legs[0].duration_in_traffic?.value ?? legs[0].duration?.value;
      const m = moment().startOf('day').seconds(value);
      let str = '';
      if (value >= 24 * 60 * 60)
        str += m.format('D') + i18n.directions.days + ' ';
      if (value >= 60 * 60) str += m.format('H') + i18n.directions.hours + ' ';
      if (value >= 60) str += m.format('m') + i18n.directions.minutes + ' ';
      return str.trim();
    }
  }
  return undefined;
}

export function getTraffic(directions: Directions) {
  const routes = directions?.routes;
  if (routes && routes.length > 0) {
    const legs = routes[0].legs;
    if (legs.length > 0) {
      const trafficDuration = legs[0].duration_in_traffic?.value;
      const ususalDuration = legs[0].duration_in_traffic?.value;
      if (trafficDuration && ususalDuration) {
        return trafficDuration / ususalDuration;
      }
    }
  }
  return undefined;
}

export function isYellowTraffic(directions: Directions) {
  const traffic = getTraffic(directions);
  if (traffic) {
    return traffic > environment.yellowTrafficFactor;
  }
  return undefined;
}

export function isRedTraffic(directions: Directions) {
  const traffic = getTraffic(directions);
  if (traffic) {
    return traffic > environment.redTrafficFactor;
  }
  return undefined;
}

export function getRoute(directions: Directions) {
  const routes = directions?.routes;
  if (routes && routes.length > 0) {
    if (routes[0].summary) return routes[0].summary;

    const legs = routes[0].legs;
    if (legs.length > 0) {
      const steps = legs[0].steps;
      if (steps && steps.length > 0) {
        const lines = steps
          .map((x) => x.transit_details?.line?.short_name)
          .filter(Boolean);
        if (lines.length > 0) {
          return lines.join('/');
        }
      }
    }
  }
  return undefined;
}
