import {
  Coordinates,
  MainWeatherData,
  WindData,
} from "../useGetForecastWeather/types";

export interface CurrentWeather {
  base: string;
  clouds: { all: string };
  cod: number;
  coord: Coordinates;
  dt: number;
  id: number;
  main: MainWeatherData;
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: WindData;
}
