import create from "zustand";
import { Units } from "../Types/types";

export type StoreState = {
  lat: Number | undefined;
  long: Number | undefined;
  setLat: (latitude: Number) => void;
  setLong: (longitude: Number) => void;
  units: Units;
};

export const useStore = create<StoreState>((set) => ({
  // initial state
  lat: undefined,
  long: undefined,
  units: Units.imperial,
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
}));
