export enum Units {
  imperial = "imperial",
  metric = "metric",
  standard = "standard",
}

export type Current = {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: NestedWeatherObject[];
  pop: number;
};

export type Daily = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: NestedWeatherObject[];
  clouds: number;
  pop: number;
  uvi: number;
  rain?: number;
};

export interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export type Weather = {
  current: Current;
  daily: Daily[];
  hourly: Current[];
  lat: number;
  long: number;
  timezone: String;
  timezone_offset: number;
};

export type NestedWeatherObject = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type NewHourlyObject = Omit<Current, "feels_like" | "humidity" | "clouds" | "temp"> & {
  "Feels Like": number;
  Temperature: number;
  Humidity: number;
  Clouds: number;
};
