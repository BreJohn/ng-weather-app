import { Component, Input, OnInit } from '@angular/core';
import { CityWeather } from '../../../model/CityWeather';

@Component({
  selector: 'app-cities-weather',
  templateUrl: './cities-weather.component.html',
  styleUrls: ['./cities-weather.component.scss']
})
export class CitiesWeatherComponent implements OnInit {
  @Input() citiesWeather!: CityWeather[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.citiesWeather);
  }

}
