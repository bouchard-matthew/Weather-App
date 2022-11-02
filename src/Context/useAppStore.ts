import create from "zustand";

export type StoreState = {
  lat: Number | undefined;
  long: Number | undefined;
  setLat: (latitude: Number) => void;
  setLong: (longitude: Number) => void;
};

export const useStore = create<StoreState>((set) => ({
  // initial state
  lat: undefined,
  long: undefined,
  // methods for manipulating state
  setLat: (latitude: Number) => {
    set(() => ({ lat: latitude }));
  },
  setLong: (longitude: Number) => {
    set(() => ({ long: longitude }));
  },
}));
