import create from "zustand";
import { Units, Weather } from "Types/types";
import { prepDataForWeatherArray } from "Utils/dataFunctions";

export type StoreState = {
  lat: Number | undefined;
  long: Number | undefined;
  setLat: (latitude: Number) => void;
  setLong: (longitude: Number) => void;
  units: Units;
  setUnits: (unit: Units) => void;
  weather: Weather | undefined;
  setWeather: (data: Weather) => void;
  weatherArray: Weather[];
  deleteAtIndex: (index: number) => void;
};

export const useStore = create<StoreState>((set) => ({
  // initial state
  lat: undefined,
  long: undefined,
  units: Units.imperial,
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
  setWeather: (data: Weather) => {
    // change state of weatherArray when weather is set (return of prepDataForWeatherArray function)
    set((state) => ({
      weather: data,
      weatherArray: prepDataForWeatherArray(data, state.weatherArray),
    }));
  },
  deleteAtIndex: (index: number) => {
    set((state) => ({ weatherArray: state.weatherArray.filter((_, idx) => idx !== index) }));
  },
}));

// interface Data {
//   lat: Number | undefined;
//   long: Number | undefined;
//   weather: Weather | undefined;
//   expiresAt: String;
// }
