import { Component, Input, OnInit } from '@angular/core';
import { CityWeather, Weather } from '../../../model/cityWeather';

@Component({
  selector: 'app-cities-weather',
  templateUrl: './cities-weather.component.html',
  styleUrls: ['./cities-weather.component.scss']
})
export class CitiesWeatherComponent implements OnInit {
  @Input() citiesWeather!: Weather[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.citiesWeather);
  }

}
