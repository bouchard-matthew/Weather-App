import { Current, Units } from "Types/types";

export interface HourlyListItemProps extends SharedProps {
  item: Current;
}

export interface SharedProps {
  units: Units;
}
