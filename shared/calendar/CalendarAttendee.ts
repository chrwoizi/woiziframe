export class CalendarAttendee {
  email?: string;
  displayName?: string;
  self?: boolean;
  optional?: boolean;
  responseStatus?: string | 'needsAction' | 'accepted';
}
