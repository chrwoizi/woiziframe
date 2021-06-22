import {
  Component,
  AfterViewInit,
  ViewChild,
  Renderer2,
  ElementRef,
} from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { i18n } from '../../../../shared/i18n';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements AfterViewInit {
  @ViewChild('sec')
  secondHand!: ElementRef;

  @ViewChild('min')
  minHand!: ElementRef;

  @ViewChild('hr')
  hourHand!: ElementRef;

  date: string = '';
  time: string = '';

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    setInterval(() => this.refresh(), 1000);
    setTimeout(() => this.refresh(), 0);
  }

  refresh() {
    var date = new Date();
    var getSeconds = date.getSeconds() / 60;
    var getMinutes = date.getMinutes() / 60;
    var getHours = date.getHours() / 12;
    const m = moment(date).locale(environment.locale);
    this.date = m.format(i18n.dateFormatLong);
    this.time = m.format(i18n.timeFormatLong);

    if (this.secondHand && this.minHand && this.hourHand) {
      this.renderer.setStyle(
        this.secondHand.nativeElement,
        'transform',
        'rotate(' + getSeconds * 360 + 'deg)'
      );
      this.renderer.setStyle(
        this.minHand.nativeElement,
        'transform',
        'rotate(' + getMinutes * 360 + 'deg)'
      );
      this.renderer.setStyle(
        this.hourHand.nativeElement,
        'transform',
        'rotate(' + getHours * 360 + 'deg)'
      );
    }
  }
}
