import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private _http: HttpClient) { }

  getCityWeather(name: string) {

  }
}
