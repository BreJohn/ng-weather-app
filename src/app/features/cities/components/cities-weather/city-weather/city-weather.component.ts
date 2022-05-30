import { Component, Input, OnInit } from '@angular/core';
import { CityWeather } from '../../../model/CityWeather';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {
  @Input() cityWeather!: CityWeather;
  
  constructor() { }

  ngOnInit(): void {
  }

}
