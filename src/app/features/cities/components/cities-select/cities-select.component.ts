import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CityWeatherApiResponse } from '../../model/CityWeatherApiResponse';

@Component({
  selector: 'app-cities-select',
  templateUrl: './cities-select.component.html',
  styleUrls: ['./cities-select.component.scss'],
})
export class CitiesSelectComponent implements OnInit {
  @Output() onGetCityWeather = new EventEmitter<string>();

  public citySelectControl = new FormControl('', Validators.required);
  public cityWeather!: CityWeatherApiResponse;

  ngOnInit(): void {}

  public getCityWeather(): void {
    const controlValue = this.citySelectControl.value;
    if (!controlValue) return;
     this.onGetCityWeather.emit(controlValue);
  }
}
