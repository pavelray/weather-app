import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Route, RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { OtherLocationsComponent } from './other-locations/other-locations.component';
import { LoadingComponent } from './loading/loading.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WeatherComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    OtherLocationsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
