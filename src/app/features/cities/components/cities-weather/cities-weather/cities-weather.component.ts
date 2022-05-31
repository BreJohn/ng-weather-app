import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CitiesService } from 'src/app/core/services/cities.service';
import { getLocalStorageCityNames as getLocalStorageFavoriteCityNames } from 'src/app/shared/utils/localStorageUtils';
import { CityWeather } from '../../../model/CityWeather';

@Component({
  selector: 'app-cities-weather',
  templateUrl: './cities-weather.component.html',
  styleUrls: ['./cities-weather.component.scss'],
})
export class CitiesWeatherComponent {
  citiesWeather: CityWeather[] = [];
  @Input() cityName = '';
  private _subscriptions: Subscription = new Subscription();

  constructor(private _cityWeatherService: CitiesService) {}

  ngOnInit() {
    //get favorite city names from local storage
    const favoriteCityNames = getLocalStorageFavoriteCityNames();
    favoriteCityNames.forEach((cityName: string) => {
      this.cityName = cityName;
      this._cityWeatherService.getCityWeatherByName(cityName, true);
    });

    //subscribe to update cities property: favorite
    this._subscriptions.add(this._cityWeatherService.$favoriteCity.subscribe((city) => {
      this.citiesWeather = this.citiesWeather.map((el) => {
        if (el.searchedName === city.name) {
          return { ...el, favorite: city.favorite };
        }
        return el;
      });
    }));

    //subscribe to get city weather by name from weather api and add to array
    this._subscriptions.add(this._cityWeatherService.$getCityWeatherByName.subscribe(
      (cityWeather) => {
        if (!cityWeather) return;
        this.citiesWeather = [
          ...this.citiesWeather,
          cityWeather
        ];
      }
    ))
  }

  ngOnChanges() {
    if(!this.cityName) return;
    //check if exists in the rendered list
    if (this.citiesWeather.find((city) => city.searchedName === this.cityName)) {
      return;
    }
    this._cityWeatherService.getCityWeatherByName(this.cityName);
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}
