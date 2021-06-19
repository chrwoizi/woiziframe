import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../../../../shared/Weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  async get(): Promise<Weather> {
    return await this.http.get<Weather>(`/api/weather`).toPromise();
  }
}
