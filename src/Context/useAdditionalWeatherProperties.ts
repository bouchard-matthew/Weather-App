import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Units } from "Types/types";
import dayjs from "dayjs";

export interface StoreState {
  lat: number | undefined;
  lon: number | undefined;
  currentTime: number;
  setLat: (latitude: number | undefined) => void;
  setLon: (longitude: number | undefined) => void;
  units: Units;
  setUnits: (unit: Units) => void;
  loading: Boolean;
  setLoading: (loading: Boolean) => void;
  setCurrentTime: (time: number) => void;
}

// Make another store for the weather. (Find a way to set expiresAt for each weather object)

export const useAdditionalWeatherProperties = create<StoreState>()(
  persist(
    (set) => ({
      // initial state
      lat: undefined,
      lon: undefined,
      loading: false,
      units: Units.imperial,
      currentTime: dayjs().unix(),
      // methods for manipulating state
      setLat: (latitude: number | undefined) => {
        set(() => ({ lat: latitude }));
      },
      setLon: (longitude: number | undefined) => {
        set(() => ({ lon: longitude }));
      },
      setUnits: (unit: Units) => {
        set(() => ({ units: unit }));
      },
      setLoading: (loading: Boolean) => {
        set(() => ({ loading }));
      },
      setCurrentTime: (time: number) => {
        set(() => ({ currentTime: time }));
      },
    }),
    {
      name: "WeatherAppProps",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => !["currentTime"].includes(key))),
    }
  )
);
