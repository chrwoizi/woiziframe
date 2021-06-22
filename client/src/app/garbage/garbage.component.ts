import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { GarbageDisposal } from '../../../../shared/garbage/GarbageDisposal';
import { GarbageDisposalEvent } from '../../../../shared/garbage/GarbageDisposalEvent';
import { i18n } from '../../../../shared/i18n';
import { GarbageService } from './garbage.service';

@Component({
  selector: 'app-garbage',
  templateUrl: './garbage.component.html',
  styleUrls: ['./garbage.component.scss'],
})
export class GarbageComponent implements OnInit, OnDestroy {
  garbage?: GarbageDisposal;
  outThisEvening?: string[];
  i18n = i18n;
  private displayInterval?: any;
  private refreshInterval?: any;

  constructor(private service: GarbageService) {}

  ngOnInit() {
    this.displayInterval = setInterval(() => this.updateDisplay(), 10000);
    this.refreshInterval = setInterval(
      () => this.refresh(),
      environment.garbageRefreshIntervalMinutes * 60 * 1000
    );
    this.refresh();
  }

  ngOnDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
    if (this.displayInterval) {
      clearInterval(this.displayInterval);
    }
  }

  refresh() {
    this.service.get().then((x) => {
      this.garbage = x || [];
      this.updateDisplay();
    });
  }

  updateDisplay() {
    this.outThisEvening = this.garbage?.events
      ?.filter(
        (x) =>
          x.date ===
          moment
            .tz(environment.timezone)
            .startOf('day')
            .add(1, 'days')
            .format('YYYY-MM-DD')
      )
      .map((x) => this.translate(x.type))
      .filter(Boolean)
      .map((x) => x as string) || ['Loading...'];
  }

  translate(type: GarbageDisposalEvent['type']) {
    return i18n.garbage[type];
  }
}
