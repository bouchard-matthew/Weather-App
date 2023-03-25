import { Weather } from "Types/types";

export interface Props extends SharedProps {
  weatherArray: Weather[];
  handleClick: (latitude: number, longitude: number) => void;
  deleteAtIndex: (index: number) => void;
}

interface SharedProps {}
