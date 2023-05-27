import { NewHourlyObject } from "Types/types";

export interface Props extends SharedProps {
  hourly: NewHourlyObject[];
  toggle: Boolean;
  handleClick: (value: Boolean) => void;
}

interface SharedProps {}
