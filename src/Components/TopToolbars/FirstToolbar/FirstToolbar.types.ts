import { Units } from "Types/types";

export interface Props extends SharedProps {
  handleState: () => void;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SharedProps {
  units: Units;
  setUnits: (unit: Units) => void;
}
