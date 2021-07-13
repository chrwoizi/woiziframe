import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Directions } from '../../../../shared/directions/Directions';
import { WorkDirection } from '../../../../shared/directions/WorkDirection';
import { i18n } from '../../../../shared/i18n';
import {
  getDuration,
  getRoute,
  getTraffic,
  isRedTraffic,
  isYellowTraffic,
} from './directions.parser';
import { DirectionsService } from './directions.service';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss'],
})
export class DirectionsComponent implements OnInit, OnDestroy {
  directions?: WorkDirection[];
  i18n = i18n;
  private refreshInterval?: any;

  constructor(private service: DirectionsService) {}

  ngOnInit() {
    this.refreshInterval = setInterval(
      () => this.refresh(),
      environment.directionsRefreshIntervalMinutes * 60 * 1000
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
      this.directions = x || [];
      console.log(x);
    });
  }

  getDuration(directions: Directions) {
    return getDuration(directions);
  }

  getTraffic(directions: Directions) {
    return getTraffic(directions);
  }

  isYellowTraffic(directions: Directions) {
    return isYellowTraffic(directions);
  }

  isRedTraffic(directions: Directions) {
    return isRedTraffic(directions);
  }

  getRoute(directions: Directions) {
    return getRoute(directions);
  }
}
