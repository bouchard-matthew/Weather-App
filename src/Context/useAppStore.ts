import create from "zustand";
import { Units, Current, Weather } from "Types/types";
import { prepDataForWeatherArray } from "Utils/dataFunctions";

type UserLocation = {
  lat: Number | undefined;
  long: Number | undefined;
};

export type StoreState = {
  lat: Number | undefined;
  long: Number | undefined;
  location: UserLocation;
  setLat: (latitude: Number) => void;
  setLong: (longitude: Number) => void;
  setLocation: (data: UserLocation) => void;
  units: Units;
  hourly: Current[];
  weather: Weather | undefined;
  setWeather: (data: Weather) => void;
  weatherArray: Weather[];
};

export const useStore = create<StoreState>((set) => ({
  // initial state
  lat: undefined,
  long: undefined,
  units: Units.imperial,
  hourly: [],
  location: {
    lat: undefined,
    long: undefined,
  },
  weather: undefined,
  weatherArray: [],
  // methods for manipulating state
  setLat: (latitude: Number) => {
    set(() => ({ lat: latitude }));
  },
  setLong: (longitude: Number) => {
    set(() => ({ long: longitude }));
  },
  setUnits: (unit: Units) => {
    set(() => ({ units: unit }));
  },
  setLocation: (data: UserLocation) => {
    set(() => ({
      location: {
        lat: data.lat,
        long: data.long,
      },
    }));
  },
  setWeather: (data: Weather) => {
    // change state of weatherArray when weather is set (return of prepDataForWeatherArray function)
    set((state) => ({ weather: data, hourly: data.hourly, weatherArray: prepDataForWeatherArray(data, state.weatherArray) }));
  },
}));
