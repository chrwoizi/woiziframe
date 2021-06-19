import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from '../calendar/calendar.service';

@Component({
  selector: 'app-calendar-redirect',
  templateUrl: './calendar-redirect.component.html',
  styleUrls: ['./calendar-redirect.component.scss'],
})
export class CalendarRedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: CalendarService
  ) {}

  async ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.service.setAuthCode(params.code).then(() => {
        window.close();
      });
    });
  }
}
