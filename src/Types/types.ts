export enum Units {
  imperial = "imperial",
  metric = "metric",
  standard = "standard",
}

export interface Current {
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
}

export interface Daily {
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
}

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

export interface AlertInterface {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
}

export interface Weather {
  alerts?: AlertInterface[];
  current: Current;
  daily: Daily[];
  hourly: Current[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  name: string;
  expiresAt: number;
}

export interface NestedWeatherObject {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface NewHourlyObject extends Omit<Current, "feels_like" | "humidity" | "clouds" | "temp" | "pop"> {
  "Feels Like": number;
  Temperature: number;
  Humidity: number;
  Clouds: number;
  Precipitation: number;
}
