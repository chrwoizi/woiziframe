import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { GarbageComponent } from './garbage/garbage.component';
import { PhotoComponent } from './photo/photo.component';
import { DirectionsComponent } from './directions/directions.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    WeatherComponent,
    WeatherIconComponent,
    CalendarComponent,
    GarbageComponent,
    DefaultComponent,
    PhotoComponent,
    DirectionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: '', component: DefaultComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
