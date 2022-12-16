import { Current, Units } from "Types/types";

export interface Props extends SharedProps {}

interface SharedProps {
  current: Current | undefined;
  name: string | undefined;
  units: Units;
}
