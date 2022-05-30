import { Component } from '@angular/core';
import { CityWeather } from './features/cities/model/CityWeather';
import {
  CityWeatherApiResponse,
  Weather,
} from './features/cities/model/CityWeatherApiResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-weather-app';
  citiesWeather: CityWeather[] = [];

  getCityWeather(cityWeather: CityWeather) {
    this.citiesWeather = [...this.citiesWeather, cityWeather];
  }
}
