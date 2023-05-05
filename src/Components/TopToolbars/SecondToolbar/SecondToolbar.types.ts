import { Weather } from "Types/types";

export interface Props extends SharedProps {
  weatherArray: Weather[];
  setLat: (lat: number) => void;
  setLon: (lon: number) => void;
  deleteAtIndex: (index: number) => void;
}

interface SharedProps {}
