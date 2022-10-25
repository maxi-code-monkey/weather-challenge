export interface Forecast {
  city: City;
  cnt: number;
  list: Array<ForecastData>;
  message: number;
};

interface City {
  coord: Coordinates;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
};

export interface Coordinates {
  lat: number;
  lon: number;
};

export interface MainWeatherData {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
};

export interface WindData {
  speed: number;
  deg: number;
  gust: number;
};

export interface ForecastData {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: MainWeatherData;
  pop: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: WindData;
};
