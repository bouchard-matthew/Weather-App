import { Current, Units } from "Types/types";

export interface Props {
  hourly: Current[];
  units: Units;
  loading: Boolean;
}
