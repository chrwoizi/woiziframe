import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';

@NgModule({
  declarations: [AppComponent, ClockComponent, WeatherComponent, WeatherIconComponent],
  imports: [BrowserModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
