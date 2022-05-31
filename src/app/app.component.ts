import { Component } from '@angular/core';
import { CitiesService } from './core/services/cities.service';
import { CityWeather } from './features/cities/model/CityWeather';
import { getLocalStorageCityNames } from './shared/utils/localStorageUtils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'ng-weather-app';
  public cityName = '';

  getCityWeather(cityName: string) {
    this.cityName = cityName;
  }
}
