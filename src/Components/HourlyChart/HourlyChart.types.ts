import { Current, Units } from "Types/types";

export interface Props extends SharedProps {
  hourly: Current[];
  toggle: Boolean;
  units: Units;
  handleClick: (value: Boolean) => void;
  loading: Boolean;
}

interface SharedProps {}
