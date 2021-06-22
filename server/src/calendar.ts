import * as fs from 'fs';
import { Auth, calendar_v3, google } from 'googleapis';
import { Calendar } from '../../shared/Calendar';
import { mock } from '../../shared/CalendarMock';
import { environment } from './environments/environment';
import * as moment from 'moment-timezone';

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

const TOKENS_PATH = 'calendar.secret.json';

const oAuth2Client = new google.auth.OAuth2(
  environment.googleCalendarClientId,
  environment.googleCalendarClientSecret,
  `http://${
    environment.host === '0.0.0.0' || environment.host === '127.0.0.1'
      ? 'localhost'
      : environment.host
  }:${environment.port}/calendar/confirm`
);

let tokens: Auth.Credentials[] = [];
try {
  tokens = JSON.parse(fs.readFileSync(TOKENS_PATH).toString());
} catch (e) {}

function saveTokens() {
  fs.writeFileSync(TOKENS_PATH, JSON.stringify(tokens, undefined, 2));
}

/**
 * Get token url for user authorization.
 * The url asks for the permission and redirects to
 * ?code=[code]&scope=https://www.googleapis.com/auth/calendar.readonly
 */
export function getAuthorizationUrl() {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  return authUrl;
}

/**
 * Store new token after prompting for user authorization
 */
export async function addAuthorizationCode(code: string) {
  return new Promise<void>((resolve, reject) => {
    oAuth2Client.getToken(code, (err, token) => {
      try {
        if (err) {
          throw new Error(
            'Error retrieving access token: ' + JSON.stringify(err)
          );
        }

        if (token) {
          tokens.push(token);
          saveTokens();
          resolve();
        } else {
          throw new Error('No token');
        }
      } catch (e) {
        reject(e);
      }
    });
  });
}

/**
 * Lists the next two weeks of all calendars.
 */
export async function listEvents() {
  const results: calendar_v3.Schema$Event[] = [];

  for (const token of tokens.slice()) {
    oAuth2Client.setCredentials(token);

    const accessToken = await oAuth2Client.getAccessToken();
    if (!accessToken.token) {
      tokens = tokens.filter((x) => x !== token);
      saveTokens();
      continue;
    }

    if (accessToken.res) {
      const newToken = accessToken.res.data as Auth.Credentials;
      if (newToken.access_token !== token.access_token) {
        tokens = tokens.filter((x) => x !== token);
        tokens.push(accessToken.res.data);
        saveTokens();
      }
    }

    try {
      const calendars = await apiListCalendars();

      for (const calendar of calendars) {
        const events = await apiListEvents(calendar.id);

        for (const event of events) {
          if (environment.filterCalendarEvent(event)) {
            if (!results.find((x) => x.id === event.id)) {
              results.push(event);
            }
          }
        }
      }
    } catch (e) {
      // token may be invalid. remove from token list.
      console.log(e);
      tokens = tokens.filter((x) => x !== token);
      saveTokens();
    }
  }

  results.sort((a, b) => {
    const sa = a.originalStartTime ?? a.start;
    const sb = b.originalStartTime ?? b.start;
    const da = moment.tz(
      sa.dateTime ?? sa.date,
      sa.timeZone ?? environment.timezone
    );
    const db = moment.tz(
      sb.dateTime ?? sb.date,
      sb.timeZone ?? environment.timezone
    );
    return da.isBefore(db) ? -1 : 1;
  });

  return results;
}

async function apiListCalendars() {
  return await new Promise<calendar_v3.Schema$CalendarListEntry[]>(
    (resolve, reject) => {
      const api = google.calendar({
        version: 'v3',
        auth: oAuth2Client,
      });

      api.calendarList.list({}, (err1, res1) => {
        if (err1) {
          reject('The calendar API returned an error: ' + err1);
        }
        resolve(res1.data.items.filter((x) => x.selected));
      });
    }
  );
}

async function apiListEvents(calendarId: string) {
  return await new Promise<calendar_v3.Schema$Event[]>((resolve, reject) => {
    const api = google.calendar({
      version: 'v3',
      auth: oAuth2Client,
    });

    api.events.list(
      {
        calendarId: calendarId,
        timeMin: new Date().toISOString(),
        timeMax: moment().add(14, 'days').toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      },
      (err2, res2) => {
        if (err2) {
          reject('The events API returned an error: ' + err2);
        }

        resolve(res2.data.items);
      }
    );
  });
}

export async function loadCalendar(): Promise<Calendar> {
  if (environment.mockCalendar) {
    return mock;
  }

  const events = await listEvents();
  return {
    events: events,
  } as Calendar;
}
