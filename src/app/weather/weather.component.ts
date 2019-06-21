import { WeatherData } from './../utilities/weather-data';
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
  otherLocation = [];
  weatherData: any;
  weatherClass: any;
  geolocationPosition: any;
  lat: number;
  long: number;
  display: string;
  constructor(private service: WeatherService) { }

  ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              this.geolocationPosition = position,
              this.lat = position.coords.latitude;
              this.long = position.coords.longitude;
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
      
      this.weatherClass = this.selectWeatherLogo(this.currentLocationWeather.weather[0].main);
    });
  }

  getWeatherByCity(cityName) {
    this.service.getWeatherByCity(cityName).subscribe(result => {
    this.weatherData = result;
    console.log(this.weatherData);
    const weather: WeatherData  = {
      temp : this.weatherData.main.temp,
      maxTemp: this.weatherData.main.temp_max,
      minTemp: this.weatherData.main.temp_max,
      city: this.weatherData.name,
      description: this.weatherData.weather[0].description,
      logo: this.selectWeatherLogo(this.weatherData.weather[0].main)
    };
      this.otherLocation.push(weather);
    });
  }

  addNewLocationWeather(city) {
    this.getWeatherByCity(city.value);
    this.display = 'none';
    city.value = '';
  }

  openModal() {
    this.display = 'block';
  }

  selectWeatherLogo(type) {
    if (type === 'Clouds') {
      return 'fa-cloud';
    }
    if (type === 'Rain') {
      return 'fa-cloud-showers-heavy';
    }
    if (type === 'Mist') {
      return 'fa-water';
    }
    if (type === 'Drizzle') {
      return 'fa-cloud-rain';
    }
    if (type === 'Haze') {
      return 'fa-smog';
    }
    if (type === 'Clear') {
      return 'fa-sun';
    }
  }

  remove(city) {
    const index = this.otherLocation.findIndex(x => x.city === city.city);
    console.log(this.otherLocation);
    this.otherLocation.slice(index, 1);
    console.log(this.otherLocation);
  }
}
