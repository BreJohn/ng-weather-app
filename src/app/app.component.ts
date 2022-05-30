import { Component } from '@angular/core';
import { CityWeather, Weather } from './features/cities/model/cityWeather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-weather-app';
  cityWeather!: Weather;
  citiesWeather: Weather[] = []

  getCityWeather(cityWeather: CityWeather) {

   this.citiesWeather = [...this.citiesWeather, cityWeather.weather[0]]
  }
}
