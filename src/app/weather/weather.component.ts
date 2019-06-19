import { WeatherService } from './../services/weather.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  currentLocationWeather: any;
  weatherClass: any;
  geolocationPosition: any;
  lat: number;
  long: number;
  constructor(private service: WeatherService) { }

  ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              this.geolocationPosition = position,
              this.lat = position.coords.latitude;
              this.long = position.coords.longitude;
              console.log(this.lat);
              console.log(this.long);
              this.getWeatherData(this.lat, this.long);
          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );

    }
  }

  getWeatherData(lat, long) {
    this.service.getWeatherLocation(this.lat, this.long).subscribe(result => {
      this.currentLocationWeather = result;
      console.log(this.currentLocationWeather);
      if (this.currentLocationWeather.weather[0].main === 'Clouds') {
        this.weatherClass = 'fa-cloud';
      }
      if (this.currentLocationWeather.weather[0].main === 'Rain') {
        this.weatherClass = 'fa-umbrella';
      }
      if (this.currentLocationWeather.weather[0].main === 'Mist') {
        this.weatherClass = 'fa-moon';
      }
    });
  }
}
