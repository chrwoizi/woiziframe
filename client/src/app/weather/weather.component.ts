import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
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
    this.weatherRestService.get().then((x) => {
      this.weather = x;
    });
  }

  getIconUrl(icon: string): string | undefined {
    if (!this.weather) return undefined;

    return `http://openweathermap.org/img/w/${icon}.png`;
  }

  getCurrentIconUrl(): string | undefined {
    if (!this.weather) return undefined;

    return this.getIconUrl(this.weather?.current.weather[0].icon);
  }

  getDayIconUrl(day: number): string | undefined {
    if (!this.weather) return undefined;

    return this.getIconUrl(this.weather.daily[day].weather[0].icon);
  }

  getHourIconUrl(hour: number): string | undefined {
    if (!this.weather) return undefined;

    return this.getIconUrl(this.weather.hourly[hour].weather[0].icon);
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

  getDayIconClass(day: number): string | undefined {
    if (!this.weather) return undefined;

    const code = this.weather.daily[day].weather[0].id;
    return this.getIconClass(code);
  }

  getHourIconClass(hour: number): string | undefined {
    if (!this.weather) return undefined;

    const code = this.weather.hourly[hour].weather[0].id;
    return this.getIconClass(code);
  }

  getCurrentTemperature() {
    if (!this.weather) return '';
    return Math.round(this.weather.current.feels_like) + ' °C';
  }

  getDayTemperature(day: number) {
    if (!this.weather) return '';
    return Math.round(this.weather.daily[day].temp.max) + ' °C';
  }

  getDate(day: number) {
    if (!this.weather) return '';

    if (day === 0) return 'heute';
    if (day === 1) return 'morgen';

    return moment
      .unix(this.weather.daily[day].dt)
      .locale(environment.locale)
      .format('dddd');
  }

  getHour(hour: number) {
    if (!this.weather) return '';
    return (
      moment
        .unix(this.weather.hourly[hour].dt)
        .locale(environment.locale)
        .format('HH') + ' Uhr'
    );
  }

  isMorning() {
    return moment.tz('Europe/Berlin').get('hour') < 12;
  }

  getCurrentRain() {
    if (!this.weather) return '';
    const nextHour = this.weather.hourly[1].dt;
    const remainingMinutes = this.weather.minutely.filter(
      (x) => x.dt > moment().unix() && x.dt < nextHour
    );
    const currentHour = remainingMinutes
      .map((x) => x.precipitation)
      .reduce((sum: number, precipitation: number) => sum + precipitation, 0);
    return (
      currentHour + (this.weather.hourly[1].rain?.['1h'] || 0) + ' mm (2h)'
    );
  }

  getDayRain(day: number) {
    if (!this.weather) return '';
    return (this.weather.daily[day].rain || 0) + ' mm';
  }
}
