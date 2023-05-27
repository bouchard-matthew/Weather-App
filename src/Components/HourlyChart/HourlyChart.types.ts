import { Hourly, Units } from "Types/types";

export interface Props extends SharedProps {
  hourly: Hourly[];
  toggle: Boolean;
  units: Units;
  handleClick: (value: Boolean) => void;
  loading: Boolean;
}

interface SharedProps {}
