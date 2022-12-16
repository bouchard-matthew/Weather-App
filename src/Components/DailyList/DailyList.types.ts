import { Daily, Units } from "Types/types";

export interface Props extends SharedProps {}

export interface SharedProps {
  daily: Daily[];
  units: Units;
  loading: Boolean;
}
