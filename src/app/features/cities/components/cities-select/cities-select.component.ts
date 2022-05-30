import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CitiesService } from 'src/app/core/services/cities.service';
import { cities } from 'src/app/shared/data/cities';
import { CityWeather } from '../../model/CityWeather';
import { CityWeatherApiResponse } from '../../model/CityWeatherApiResponse';

@Component({
  selector: 'app-cities-select',
  templateUrl: './cities-select.component.html',
  styleUrls: ['./cities-select.component.scss'],
})
export class CitiesSelectComponent implements OnInit {
  @Output() onGetCityWeather = new EventEmitter<CityWeather>();

  cities = [...cities];
  citySelectControl = new FormControl();
  cityWeather!: CityWeatherApiResponse;

  constructor(private _citiesService: CitiesService) {}

  ngOnInit(): void {}

  public getCityWeather(): void {
    const controlValue = this.citySelectControl.value;
    if (!controlValue) return;
    this._citiesService
      .getCityWeather(this.citySelectControl.value)
      .subscribe((res) =>
        this.onGetCityWeather.emit({
          name: this.citySelectControl.value,
          weather: res?.weather[0],
          temperature: res.main.temp
        })
      );
  }
}
