export enum Units {
  imperial = "imperial",
  metric = "metric",
  standard = "standard",
}

export type NestedWeatherObject = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type HourlyObject = {
  dt: number;
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

export type NewHourlyObject = Omit<HourlyObject, "feels_like" | "humidity" | "clouds" | "temp"> & {
  "Feels Like": number;
  Temperature: number;
  Humidity: number;
  Clouds: number;
};
