import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css'],
})
export class WeatherIconComponent {
  @Input() iconClass?: string;
  @Input() iconImageUrl?: string;
  @Input() title?: string;
}
