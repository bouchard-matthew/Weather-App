import { Units } from "Types/types";
import { SWRResponse } from "swr";

export interface Props extends SharedProps {
  fetchWeather: () => void;
  setZip: (e: string) => void;
  units: Units;
  setUnits: (unit: Units) => void;
}

interface SharedProps {}
