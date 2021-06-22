import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Calendar } from '../../../../shared/calendar/Calendar';
import { CalendarEvent } from '../../../../shared/calendar/CalendarEvent';
import { CalendarService } from './calendar.service';
import * as moment from 'moment-timezone';
import { i18n } from '../../../../shared/i18n';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, OnDestroy {
  calendar?: Calendar;
  private refreshInterval?: any;

  constructor(private service: CalendarService) {}

  ngOnInit() {
    this.refreshInterval = setInterval(
      () => this.refresh(),
      environment.calendarRefreshIntervalMinutes * 60 * 1000
    );
    this.refresh();
  }

  ngOnDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  refresh() {
    this.service.get().then((x) => {
      this.calendar = x || [];
    });
  }

  getDate(event: CalendarEvent) {
    const start = event.originalStartTime ?? event.start;
    if (!start) return '';

    let date;

    if (start.dateTime) {
      date = moment.tz(start.dateTime, start.timeZone ?? environment.timezone);
    }

    if (start.date) {
      date = moment.tz(start.date, start.timeZone ?? environment.timezone);
    }

    if (!date) return '';

    const today = moment.tz(environment.timezone).startOf('day');

    if (date.tz(environment.timezone).startOf('day').isSame(today)) {
      return i18n.today;
    }

    if (
      date.tz(environment.timezone).startOf('day').isSame(today.add(1, 'days'))
    ) {
      return i18n.tomorrow;
    }

    return date.format(i18n.dateFormat);
  }

  getDateTime(event: CalendarEvent) {
    const start = event.originalStartTime ?? event.start;
    if (!start) return '';
    if (start.dateTime) {
      const time = moment
        .tz(start.dateTime, start.timeZone ?? environment.timezone)
        .format(i18n.timeFormat);
      const date = this.getDate(event);
      return time + ' · ' + date;
    }
    if (start.date) {
      return this.getDate(event);
    }
    return '';
  }
}
