import create from "zustand";
import { Units, Weather } from "Types/types";
import { persist } from "zustand/middleware";
import { handleWeatherAppend } from "Utils/dataFunctions";

export interface StoreState {
  lat: Number | undefined;
  lon: Number | undefined;
  setLat: (latitude: Number) => void;
  setLon: (longitude: Number) => void;
  units: Units;
  setUnits: (unit: Units) => void;
  weather: Weather[];
  setWeather: (data: Weather) => void;
  deleteAtIndex: (index: number) => void;
  expiresAt: Number | undefined;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      // initial state
      lat: undefined,
      lon: undefined,
      units: Units.imperial,
      weather: [],
      expiresAt: undefined,
      // methods for manipulating state
      setLat: (latitude: Number) => {
        set(() => ({ lat: latitude }));
      },
      setLon: (longitude: Number) => {
        set(() => ({ lon: longitude }));
      },
      setUnits: (unit: Units) => {
        set(() => ({ units: unit }));
      },
      setWeather: (data: Weather) => {
        set((state) => ({
          weather: handleWeatherAppend(state.weather, data),
        }));
      },
      deleteAtIndex: (index: number) => {
        set((state) => ({ weather: state.weather.filter((_, idx) => idx !== index) }));
      },
    }),
    {
      name: "Weather",
      getStorage: () => localStorage,
    }
  )
);

// interface Data {
//   lat: Number | undefined;
//   long: Number | undefined;
//   weather: Weather | undefined;
//   expiresAt: String;
// }
