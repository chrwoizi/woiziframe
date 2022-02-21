import * as fs from 'fs';
import { Auth, calendar_v3, google } from 'googleapis';
import * as moment from 'moment-timezone';
import { Calendar } from '../../shared/calendar/Calendar';
import { mock } from '../../shared/calendar/Calendar.mock';
import { loadDirections } from './directions';
import { environment } from './environments/environment';

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

const tokenFilePath =
  environment.calendar.tokenFilePath ?? 'secrets/calendar.secret.json';

function loadTokens() {
  let tokens: Auth.Credentials[] = [];
  try {
    tokens = JSON.parse(fs.readFileSync(tokenFilePath).toString());
  } catch (e) {}
  return tokens;
}

function saveTokens(tokens) {
  fs.writeFileSync(tokenFilePath, JSON.stringify(tokens, undefined, 2));
}

/**
 * Get token url for user authorization.
 * The url asks for the permission and redirects to
 * ?code=[code]&scope=https://www.googleapis.com/auth/calendar.readonly
 */
export function getAuthorizationUrl(redirect: string) {
  console.log('google.auth.OAuth2.generateAuthUrl', redirect);
  const oAuth2Client = new google.auth.OAuth2(
    environment.calendar.googleCalendarClientId,
    environment.calendar.googleCalendarClientSecret,
    redirect
  );

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    state: Buffer.from(redirect, 'utf-8').toString('base64'),
  });
  return authUrl;
}

/**
 * Store new token after prompting for user authorization
 */
export async function addAuthorizationCode(code: string, state: string) {
  return new Promise<void>((resolve, reject) => {
    console.log('google.auth.OAuth2.getToken', code, state);
    const redirect = Buffer.from(state, 'base64').toString('utf-8');

    const oAuth2Client = new google.auth.OAuth2(
      environment.calendar.googleCalendarClientId,
      environment.calendar.googleCalendarClientSecret,
      redirect
    );

    oAuth2Client.getToken(code, (err, token) => {
      try {
        if (err) {
          throw new Error(
            'Error retrieving access token: ' + JSON.stringify(err)
          );
        }

        if (token) {
          const tokens = loadTokens();
          tokens.push(token);
          saveTokens(tokens);
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
  const oAuth2Client = new google.auth.OAuth2(
    environment.calendar.googleCalendarClientId,
    environment.calendar.googleCalendarClientSecret
  );

  const results: calendar_v3.Schema$Event[] = [];

  let tokens = loadTokens();
  for (const token of tokens.slice()) {
    oAuth2Client.setCredentials(token);

    console.log('google.auth.OAuth2.getAccessToken');
    const accessToken = await oAuth2Client.getAccessToken();
    if (!accessToken.token) {
      tokens = tokens.filter((x) => x !== token);
      saveTokens(tokens);
      continue;
    }

    if (accessToken.res) {
      const newToken = accessToken.res.data as Auth.Credentials;
      if (newToken.access_token !== token.access_token) {
        tokens = tokens.filter((x) => x !== token);
        tokens.push(accessToken.res.data);
        saveTokens(tokens);
      }
    }

    try {
      const calendars = await apiListCalendars(oAuth2Client);

      for (const calendar of calendars) {
        const events = await apiListEvents(oAuth2Client, calendar.id);

        for (const event of events) {
          if (environment.calendar.filterCalendarEvent(event)) {
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
      saveTokens(tokens);
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

async function apiListCalendars(oAuth2Client: Auth.OAuth2Client) {
  return await new Promise<calendar_v3.Schema$CalendarListEntry[]>(
    (resolve, reject) => {
      const api = google.calendar({
        version: 'v3',
        auth: oAuth2Client,
      });

      console.log('google.calendar.calendarList.list');
      api.calendarList.list({}, (err1, res1) => {
        if (err1) {
          reject('The calendar API returned an error: ' + err1 + '\n' + res1);
          return;
        }
        resolve(res1.data.items.filter((x) => x.selected));
      });
    }
  );
}

async function apiListEvents(
  oAuth2Client: Auth.OAuth2Client,
  calendarId: string
) {
  return await new Promise<calendar_v3.Schema$Event[]>((resolve, reject) => {
    const api = google.calendar({
      version: 'v3',
      auth: oAuth2Client,
    });

    console.log('google.calendar.events.list');
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
          reject('The events API returned an error: ' + err2 + '\n' + res2);
          return;
        }

        resolve(res2.data.items);
      }
    );
  });
}

export async function loadCalendar(): Promise<Calendar> {
  let calendar: Calendar;
  if (environment.calendar.mockCalendar) {
    calendar = mock;
  } else {
    calendar = { events: await listEvents() };
  }

  let count = 0;
  for (const event of calendar.events) {
    if (++count >= 5) break;
    if (event.location?.length > 0) {
      const arrivalTime = event.start.dateTime
        ? moment
            .tz(
              event.start.dateTime,
              event.start.timeZone ?? environment.timezone
            )
            .toDate()
        : event.start.date
        ? moment
            .tz(event.start.date, event.start.timeZone ?? environment.timezone)
            .toDate()
        : undefined;

      event.drivingDirections = await loadDirections(
        event.location,
        undefined,
        arrivalTime,
        'driving'
      );

      if (event.drivingDirections) {
        event.transitDirections = await loadDirections(
          event.location,
          undefined,
          arrivalTime,
          'transit'
        );
      }
    }
  }

  return calendar;
}
