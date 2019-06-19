import { apiKEY, apiURL } from './../utilities/const';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string) {
    return this.http.get(apiURL + city + apiKEY);
  }
  getWeatherLocation(lat,long) {
    return this.http.get(apiURL + `lat=${lat}&lon=${long}` + apiKEY);
  }
}
