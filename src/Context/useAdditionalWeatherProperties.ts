import create from "zustand";
import { persist } from "zustand/middleware";
import { Units } from "Types/types";

export interface StoreState {
  lat: number | undefined;
  lon: number | undefined;
  setLat: (latitude: number | undefined) => void;
  setLon: (longitude: number | undefined) => void;
  units: Units;
  setUnits: (unit: Units) => void;
  loading: Boolean;
  setLoading: (loading: Boolean) => void;
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
      weather: [],
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
    }),
    {
      name: "WeatherAppProps",
      getStorage: () => localStorage,
    }
  )
);
