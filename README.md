# Woiziframe

This web application displays photos from disk. It is supposed to run on a digital photo frame.

Features:

- A new photo is selected randomly every few seconds.

- The screen size can limited to a fixed ratio ([here](client/src/app/_variables.scss)).

- The photo is resized to fit the screen. The remaining screen space is filled with a blurred variant of the image.

- The album title is shown at the bottom of the screen.

- A button toggles the fullscreen browser mode.

- The mouse cursor will only be visible while the mouse is moved.

- Additional data can be displayed as text on top of the photo:

  - The current time and date.

  - The current weather and tomorrow's weather as icon, temperature, and rain. (OpenWeatherMap)

  - Calendar events. To connect to a Google Calendar run `npm run add-calendar` in the `server` directory.

  - The driving duration and public transit duration to calendar event locations and to daily recurring destinations, e.g. the workplace. (Google Directions API)

  - The garbage collection events in Hannover, Germany.

![screenshot](docs/screenshot.png)

This project is based on The Google Photos client [anton-lunev/photo-frame](https://github.com/anton-lunev/photo-frame) and the weather widget [krzysztofsaja/angular-weather-widget](https://github.com/krzysztofsaja/angular-weather-widget)

Use [piscreen](piscreen/README.md) to switch the raspberry pi display on or off based on motion detection or web api.

## Deployment

Build the docker image:
`docker build -t woiziframe .`

Start the docker container:
`docker run -p 4201:4201 -v /path/to/photos:/woiziframe/pictures woiziframe`

## Configuration

Set the screen aspect ratio, padding, and offset in [_variables.scss_](client/src/app/_variables.scss).

Configuration is pulled from (in order):

- environment variables
- `server/.prod.env`
- `server/.prod.secret.env`
- `server/.env`

| variable                        | description                                                                                                | default       |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------- |
| HOST                            | The host name or ip address to serve from                                                                  | 0.0.0.0       |
| PORT                            | The port to serve from                                                                                     | 4201          |
| LOCATION_LATITUDE               | The location latitude of the device. This is used for weather and directions.                              | 52.477093     |
| LOCATION_LONGITUDE              | The location latitude of the device. This is used for weather and directions.                              | 10.090432     |
| LOCALE                          | The locale                                                                                                 | de            |
| TIMEZONE                        | The timezone                                                                                               | Europe/Berlin |
| PHOTO_BASE_PATH                 | The file path to the photo albums                                                                          | pictures      |
| PHOTO_BLACKLIST                 | Hide albums that contain a .woiziframe-ignore file.                                                        | true          |
| PHOTO_WHITELIST                 | Hide albums that do not contain a .woiziframe-include file.                                                | false         |
| CALENDAR_ENABLED                | Query the Google Calendar API                                                                              | false         |
| CALENDAR_MOCK                   | Use calendar mock data                                                                                     |               |
| GOOGLE_CALENDAR_CLIENT_ID       | The Google Calendar API client ID. Generate a new one at https://console.cloud.google.com/apis/credentials |               |
| GOOGLE_CALENDAR_CLIENT_SECRET   | The Google Calendar API secret. Generate a new one at https://console.cloud.google.com/apis/credentials    |               |
| DIRECTIONS_ENABLED              | Query the Google Directions API (Goole Maps) to show traffic information                                   |               |
| DIRECTIONS_MOCK                 | Use directions mock data                                                                                   |               |
| GOOGLE_DIRECTIONS_API_KEY       | The Google Directions API key. Generate a new one at https://console.cloud.google.com/apis/credentials     |               |
| DIRECTIONS_PERSON_0_NAME        | Name of the person who is interested in the traffic information                                            |               |
| DIRECTIONS_PERSON_0_ORIGIN      | Origin of travel                                                                                           |               |
| DIRECTIONS_PERSON_0_DESTINATION | Destination of travel                                                                                      |               |
| DIRECTIONS_PERSON_0_MODE        | Mode of travel, e.g. `driving`, `transit`                                                                  |               |
| DIRECTIONS_PERSON_0_WEEKDAYS    | Weekdays as array, e.g. `[1,2,3,4,5]` for monday through friday                                            |               |
| DIRECTIONS_PERSON_0_FROM_HOURS  | Starting time for displaying the traffic information, e.g. `7` for 7 AM                                    |               |
| DIRECTIONS_PERSON_0_TO_HOURS    | End time for displaying the traffic information in hours, e.g. `12` for noon                               |               |
| GARBAGE_ENABLED                 | Query aha-region.de for garbage collection days                                                            | false         |
| GARBAGE_MOCK                    | Use garbage collection mock data                                                                           |               |
| GARBAGE_MUNICIPALITY            | See the payload of the abfuhrkalender endpoint                                                             |               |
| GARBAGE_STREET_LETTER           | See the payload of the abfuhrkalender endpoint                                                             |               |
| GARBAGE_STREET_CODE             | See the payload of the abfuhrkalender endpoint                                                             |               |
| GARBAGE_HOUSE_NUMBER            | See the payload of the abfuhrkalender endpoint                                                             |               |
| WEATHER_ENABLED                 | Query openweathermap.org for weather information                                                           | false         |
| WEATHER_MOCK                    | Use weather mock data                                                                                      |               |
| OPEN_WEATHER_API_KEY            | The openweathermap.org API key. Generate a new one at https://openweathermap.org/appid                     |               |

## Development server

Run `cd client; npm start` for a dev frontend server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `cd server; npm start` for a backend server. Navigate to `http://localhost:4201/api/albums` or `http://localhost:4201/api/files?album=[albumname]` or `http://localhost:4201/api/file/[albumname]/[filename]`.
