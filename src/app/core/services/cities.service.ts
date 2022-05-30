import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';
import { CityWeather } from 'src/app/features/cities/model/cityWeather';
import { City } from 'src/app/features/cities/model/city';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private _apiKey = environment.weatherApiKey;
  private _weatherEndpoint = environment.weatherEndpoint;
  private _cityEndpoint = environment.citiesEndpoint;

  constructor(private _http: HttpClient) {}

  getCityWeather(name: string): Observable<CityWeather> {
    return this._http
      .get<City[]>(`${this._cityEndpoint}?q=${name}&limit=1&appid=${this._apiKey}`)
      .pipe(
        switchMap((cities) => {
          return this._http.get<CityWeather>(
            `${this._weatherEndpoint}?lat=${cities[0].lat}&lon=${cities[0].lon}&appid=${this._apiKey}`
          );
        })
      )
  }
}
