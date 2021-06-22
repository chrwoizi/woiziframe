import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { GarbageComponent } from './garbage/garbage.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    WeatherComponent,
    WeatherIconComponent,
    CalendarComponent,
    GarbageComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: '', component: DefaultComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
