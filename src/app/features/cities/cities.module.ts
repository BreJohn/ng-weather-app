import { NgModule } from '@angular/core';
import { CitiesSelectComponent } from './components/cities-select/cities-select.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CitiesWeatherComponent } from './components/cities-weather/cities-weather/cities-weather.component';
import { CityWeatherComponent } from './components/cities-weather/city-weather/city-weather.component';



@NgModule({
  declarations: [
    CitiesSelectComponent,
    CitiesWeatherComponent,
    CityWeatherComponent
  ],
  imports: [
    SharedModule
  ],exports: [
    CitiesSelectComponent,
    CitiesWeatherComponent,
    CityWeatherComponent
  ]
})
export class CitiesModule { }
