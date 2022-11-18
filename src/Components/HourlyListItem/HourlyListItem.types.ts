import { HourlyObject, Units } from "Types/types";

export interface HourlyListItemProps extends SharedProps {
  item: HourlyObject;
}

export interface SharedProps {
  units: Units;
}
