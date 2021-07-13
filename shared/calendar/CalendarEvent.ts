import { Directions } from '../directions/Directions';
import { CalendarAttendee } from './CalendarAttendee';
import { CalendarEventDateTime } from './CalendarEventDateTime';
import { CalendarEventReminder } from './CalendarEventReminder';

export interface CalendarEvent {
  /**
   * The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.
   */
  colorId?: string | null;
  /**
   * The creator of the event. Read-only.
   */
  creator?: {
    displayName?: string;
    email?: string;
    id?: string;
    self?: boolean;
  } | null;
  /**
   * Description of the event. Can contain HTML. Optional.
   */
  description?: string | null;
  /**
   * The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.
   */
  end?: CalendarEventDateTime;
  /**
   * Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.
   */
  endTimeUnspecified?: boolean | null;
  /**
   * Extended properties of the event.
   */
  extendedProperties?: {
    private?: {
      [key: string]: string;
    };
    shared?: {
      [key: string]: string;
    };
  } | null;
  /**
   * Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
   * - characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
   * - the length of the ID must be between 5 and 1024 characters
   * - the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
   * If you do not specify an ID, it will be automatically generated by the server.
   * Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.
   */
  id?: string | null;
  /**
   * Type of the resource ("calendar#event").
   */
  kind?: string | null;
  /**
   * Geographic location of the event as free-form text. Optional.
   */
  location?: string | null;
  /**
   * The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.
   */
  organizer?: {
    displayName?: string;
    email?: string;
    id?: string;
    self?: boolean;
  } | null;
  /**
   * Information about the event's reminders for the authenticated user.
   */
  reminders?: {
    overrides?: CalendarEventReminder[];
    useDefault?: boolean;
  } | null;
  /**
   * For an instance of a recurring event, this is the time at which this event would start according to the recurrence data in the recurring event identified by recurringEventId. It uniquely identifies the instance within the recurring event series even if the instance was moved to a different time. Immutable.
   */
  originalStartTime?: CalendarEventDateTime;
  /**
   * The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.
   */
  start?: CalendarEventDateTime;
  /**
   * Title of the event.
   */
  summary?: string | null;
  /**
   * Visibility of the event. Optional. Possible values are:
   * - "default" - Uses the default visibility for events on the calendar. This is the default value.
   * - "public" - The event is public and event details are visible to all readers of the calendar.
   * - "private" - The event is private and only event attendees may view event details.
   * - "confidential" - The event is private. This value is provided for compatibility reasons.
   */
  visibility?: string | null;

  etag?: string | null;
  status?: string | null;
  htmlLink?: string | null;
  created?: string | null;
  updated?: string | null;
  transparency?: string | null;
  iCalUID?: string | null;
  sequence?: number | null;
  eventType?: string | null;
  recurringEventId?: string | null;
  attendees?: CalendarAttendee[];
  guestsCanInviteOthers?: boolean;
  privateCopy?: boolean;

  drivingDirections?: Directions;
  transitDirections?: Directions;
}
