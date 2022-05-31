import { Weather } from './CityWeatherApiResponse';

export class CityWeather {
  id: number;
  name: string;
  searchedName: string;
  temperature: number;
  weather: Weather;
  favorite: boolean;

  constructor(
    id: number = 0,
    name = '',
    searchedName = '',
    temperature: number = 0,
    weather: Weather,
    favorite: boolean
  ) {
    this.id = id;
    this.name = name;
    this.temperature = temperature;
    this.weather = weather;
    this.favorite = favorite;
    this.searchedName = searchedName;
  }
}

