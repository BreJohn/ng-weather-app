export interface CityWeather {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

interface Wind {
  speed: number;
  deg: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Clouds {
  all: number;
}