import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iconCodes, Weather } from '../shared/weather/types';
import { WeatherRestService } from '../shared/weather/weather-rest.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  weather?: Weather;
  private refreshInterval?: any;

  constructor(private weatherRestService: WeatherRestService) {}

  ngOnInit() {
    this.refreshInterval = setInterval(
      () => this.refresh(),
      environment.weatherRefreshIntervalMinutes * 60 * 1000
    );
    this.refresh();
  }

  ngOnDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  refresh() {
    this.weatherRestService.get().then((x) => (this.weather = x));
  }

  getIconUrl(icon: string): string | undefined {
    if (!this.weather) return undefined;

    return `http://openweathermap.org/img/w/${icon}.png`;
  }

  getCurrentIconUrl(): string | undefined {
    if (!this.weather) return undefined;

    return this.getIconUrl(this.weather?.current.weather[0].icon);
  }

  getTomorrowsIconUrl(): string | undefined {
    if (!this.weather) return undefined;

    return this.getIconUrl(this.weather.daily[1].weather[0].icon);
  }

  getIconClass(code: number): string | undefined {
    if (!this.weather) return undefined;

    const prefix = 'wi wi-';
    let icon = iconCodes[code].icon;
    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      icon = 'day-' + icon;
    }
    icon = prefix + icon;
    return icon;
  }

  getCurrentIconClass(): string | undefined {
    if (!this.weather) return undefined;

    const code = this.weather.current.weather[0].id;
    return this.getIconClass(code);
  }

  getTomorrowsIconClass(): string | undefined {
    if (!this.weather) return undefined;

    const code = this.weather.daily[1].weather[0].id;
    return this.getIconClass(code);
  }

  getCurrentTemperature() {
    if (!this.weather) return '';
    return Math.round(this.weather.current.feels_like) + ' °C';
  }

  getTomorrowsTemperature() {
    if (!this.weather) return '';
    return Math.round(this.weather.daily[1].feels_like.day) + ' °C';
  }
}
