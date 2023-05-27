import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Weather } from "Types/types";
import { useAddWeather } from "Hooks/useAddWeather";

export interface StoreState {
  weather: Weather[];
  setWeather: (data: Weather) => void;
  deleteAtIndex: (index: number) => void;
}

export const useWeather = create<StoreState>()(
  persist(
    (set) => ({
      // initial state
      weather: [],
      // methods for manipulating state
      setWeather: (data: Weather) => {
        set((state) => ({
          weather: useAddWeather(state.weather, data),
        }));
      },
      deleteAtIndex: (index: number) => {
        set((state) => ({ weather: state.weather.filter((_, idx) => idx !== index) }));
      },
    }),
    {
      name: "Weather",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
