import { Component, Input, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/core/services/cities.service';
import { CityWeather } from '../../../model/CityWeather';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent {
  @Input() cityWeather!: CityWeather;
  
  constructor(private _citiesService: CitiesService) { }

  public toggleFavoriteCity(name: string) {
    this._citiesService.toggleFavoriteCity(name, !this.cityWeather.favorite);
  }

}
