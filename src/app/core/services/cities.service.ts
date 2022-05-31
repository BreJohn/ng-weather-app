import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';
import { CityWeatherApiResponse } from 'src/app/features/cities/model/CityWeatherApiResponse';
import { CityApiResponse } from 'src/app/features/cities/model/CityApiResponse';
import { Subject } from 'rxjs';
import {
  removeFromLocalStorage,
  storeInLocalStorage,
} from 'src/app/shared/utils/localStorageUtils';
import { CityWeather } from 'src/app/features/cities/model/CityWeather';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private _apiKey = environment.weatherApiKey;
  private _weatherEndpoint = environment.weatherEndpoint;
  private _cityEndpoint = environment.citiesEndpoint;

  private favoriteCitySubj = new Subject<{ name: string; favorite: boolean }>();
  public $favoriteCity = this.favoriteCitySubj.asObservable();

  private getCityWeatherByNameSubj = new Subject<CityWeather>();
  public $getCityWeatherByName = this.getCityWeatherByNameSubj.asObservable();

  constructor(private _http: HttpClient) {}

  public getCityWeatherByName(name: string, favorite = false): void {
    this._http
      .get<CityApiResponse[]>(
        `${this._cityEndpoint}?q=${name}&limit=1&appid=${this._apiKey}`
      )
      .pipe(
        distinctUntilChanged(),
        debounceTime(1000),
        switchMap((cities) => {
          return this._http.get<CityWeatherApiResponse>(
            `${this._weatherEndpoint}?lat=${cities[0].lat}&lon=${cities[0].lon}&units=metric&appid=${this._apiKey}`
          );
        }),
        tap((res) => {
          if (!res) return;
          this.getCityWeatherByNameSubj.next(
            new CityWeather(
              res.id,
              res.name,
              name,
              res.main.temp,
              res.weather[0],
              favorite
            )
          );
        })
      )
      .subscribe();
  }

  public toggleFavoriteCity(name: string, favorite: boolean) {
    this.favoriteCitySubj.next({ name, favorite });
    if (favorite) {
      storeInLocalStorage(name);
      return;
    }
    removeFromLocalStorage(name);
  }
}
