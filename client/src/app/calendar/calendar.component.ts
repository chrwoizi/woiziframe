import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Calendar } from '../../../../shared/Calendar';
import { CalendarEvent } from '../../../../shared/CalendarEvent';
import { CalendarService } from './calendar.service';
import * as moment from 'moment-timezone';

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

  getDateTime(event: CalendarEvent) {
    const start = event.originalStartTime ?? event.start;
    if (!start) return '';
    if (start.dateTime) {
      return moment
        .tz(start.dateTime, start.timeZone ?? environment.timezone)
        .format('HH:mm · DD. MMM.');
    }
    if (start.date) {
      return moment
        .tz(start.date, start.timeZone ?? environment.timezone)
        .format('DD. MMM.');
    }
    return '';
  }
}
