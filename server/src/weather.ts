import { environment } from './environments/environment';
import { Weather } from '../../shared/weather/Weather';
import { mock } from '../../shared/weather/WeatherMock';
import * as request from 'request-promise-native';

export async function loadWeather(): Promise<Weather> {
  if (environment.weather.mockWeather) {
    return mock;
  }

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${environment.locationLatitude}&lon=${environment.locationLongitude}&units=metric&lang=${environment.locale}&appid=${environment.weather.openWeatherApiKey}`;
  const response = JSON.parse(await request(url));
  return response as Weather;
}
