import { Hourly, Units } from "Types/types";

export interface Props {
  hourly: Hourly[];
  units: Units;
  loading: Boolean;
}
