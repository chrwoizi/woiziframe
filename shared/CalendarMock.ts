import { Calendar } from './Calendar';

export const mock: Calendar = {
  events: [
    {
      kind: 'calendar#event',
      id: '9aefoagu6as6hvp7a43lt2asns_20210619T160000Z',
      summary: 'Call for Pizza',
      colorId: '8',
      creator: {
        email: 'someone@googlemail.com',
        self: true,
      },
      organizer: {
        email: 'someone@googlemail.com',
        self: true,
      },
      start: {
        dateTime: '2021-06-19T18:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      end: {
        dateTime: '2021-06-19T19:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      originalStartTime: {
        dateTime: '2021-06-19T18:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      reminders: {
        useDefault: true,
      },
    },
    {
      kind: 'calendar#event',
      id: '6ksjieakc5hmc2b2c4r32a9kclj36bb1bgp64b9hc4q66p1dcg330p9mc4',
      summary: 'Call the White House',
      creator: {
        email: 'someone@googlemail.com',
        self: true,
      },
      organizer: {
        email: 'someone@googlemail.com',
        self: true,
      },
      start: {
        dateTime: '2021-06-21T11:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      end: {
        dateTime: '2021-06-21T12:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      reminders: {
        useDefault: true,
      },
    },
    {
      kind: 'calendar#event',
      id: '9be7oabfnae6hvp7h43ltfjsks_20210621T160000Z',
      summary: 'Feed the guinea pig',
      colorId: '8',
      creator: {
        email: 'someone@googlemail.com',
        self: true,
      },
      organizer: {
        email: 'someone@googlemail.com',
        self: true,
      },
      start: {
        dateTime: '2021-06-21T18:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      end: {
        dateTime: '2021-06-21T19:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      originalStartTime: {
        dateTime: '2021-06-21T18:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      reminders: {
        useDefault: true,
      },
    },
    {
      kind: 'calendar#event',
      id: '65h78apq1gvn164i0p3f72q6ee_20210622T180000Z',
      summary: 'Mow the lawn',
      colorId: '5',
      creator: {
        email: 'someone@googlemail.com',
        displayName: 'Someone',
        self: true,
      },
      organizer: {
        email: 'someone@googlemail.com',
        displayName: 'Someone',
        self: true,
      },
      start: {
        dateTime: '2021-06-22T20:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      end: {
        dateTime: '2021-06-22T21:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      originalStartTime: {
        dateTime: '2021-06-22T20:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      extendedProperties: {
        private: {
          eventAttendeeList: '[]',
        },
      },
      reminders: {
        useDefault: false,
      },
    },
    {
      kind: 'calendar#event',
      id: '64qj2o9i6so6cbb4chgacb9kf9j66b9ocosj5bb460oj8or528s3gopk6k_20210623T070000Z',
      summary: 'Finish the project',
      colorId: '5',
      creator: {
        email: 'someone@googlemail.com',
        self: true,
      },
      organizer: {
        email: 'someone@googlemail.com',
        self: true,
      },
      start: {
        dateTime: '2021-06-23T09:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      end: {
        dateTime: '2021-06-23T11:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      originalStartTime: {
        dateTime: '2021-06-23T09:00:00+02:00',
        timeZone: 'Europe/Rome',
      },
      reminders: {
        useDefault: false,
        overrides: [
          {
            method: 'popup',
            minutes: 10,
          },
        ],
      },
    },
  ],
};
