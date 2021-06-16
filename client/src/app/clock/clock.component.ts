import {
  Component,
  AfterViewInit,
  ViewChild,
  Renderer2,
  ElementRef,
} from '@angular/core';
import * as moment from 'moment';

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
    setInterval(() => this.clockRotating(), 1000);
  }

  clockRotating() {
    var date = new Date();
    var getSeconds = date.getSeconds() / 60;
    var getMinutes = date.getMinutes() / 60;
    var getHours = date.getHours() / 12;
    this.date = moment(date).format('DD.\u00A0MMM.');
    this.time = moment(date).format('HH:mm:ss');

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
