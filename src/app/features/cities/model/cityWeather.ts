import { Weather } from './CityWeatherApiResponse';

export interface CityWeather {
  name: string;
  temperature: number;
  weather: Weather;
}
