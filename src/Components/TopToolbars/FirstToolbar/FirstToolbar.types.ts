import { Units } from "Types/types";

export interface Props extends SharedProps {
  fetchWeather: () => void;
  setZip: (e: string) => void;
  units: Units;
  setUnits: (unit: Units) => void;
}

interface SharedProps {}
