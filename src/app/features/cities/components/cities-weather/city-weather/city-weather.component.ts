import { Component, Input, OnInit } from '@angular/core';
import { CityWeather, Weather } from '../../../model/cityWeather';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {
  @Input() weather!: Weather;
  
  constructor() { }

  ngOnInit(): void {
  }

}
