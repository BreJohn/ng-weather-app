import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';
import { CityWeatherApiResponse } from 'src/app/features/cities/model/CityWeatherApiResponse';
import { CityApiResponse } from 'src/app/features/cities/model/CityApiResponse';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private _apiKey = environment.weatherApiKey;
  private _weatherEndpoint = environment.weatherEndpoint;
  private _cityEndpoint = environment.citiesEndpoint;

  constructor(private _http: HttpClient) {}

  getCityWeather(name: string): Observable<CityWeatherApiResponse> {
    return this._http
      .get<CityApiResponse[]>(`${this._cityEndpoint}?q=${name}&limit=1&appid=${this._apiKey}`)
      .pipe(
        switchMap((cities) => {
          return this._http.get<CityWeatherApiResponse>(
            `${this._weatherEndpoint}?lat=${cities[0].lat}&lon=${cities[0].lon}&units=metric&appid=${this._apiKey}`
          );
        })
      )
  }
}
