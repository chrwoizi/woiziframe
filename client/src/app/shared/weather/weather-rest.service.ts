import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Weather } from './types';
import { mock } from './mock';

@Injectable({
  providedIn: 'root',
})
export class WeatherRestService {
  constructor(private http: HttpClient) {}

  async get(): Promise<Weather> {
    if (environment.mockWeather) {
      return mock;
    }

    return await this.http
      .get<Weather>(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${environment.locationLatitude}&lon=${environment.locationLongitude}&units=metric&lang=${environment.locale}&appid=${environment.openWeatherApiKey}`
      )
      .toPromise();
  }
}
