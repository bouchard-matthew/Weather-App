import create from "zustand";
import { persist } from "zustand/middleware";
import { Weather } from "Types/types";
import { handleWeatherAppend } from "Utils/dataFunctions";

export interface StoreState {
  weather: Weather[];
  setWeather: (data: Weather) => void;
  deleteAtIndex: (index: number) => void;
}

// Make another store for the weather. (Find a way to set expiresAt for each weather object)
export const useWeather = create<StoreState>()(
  persist(
    (set) => ({
      // initial state
      weather: [],
      // methods for manipulating state
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
