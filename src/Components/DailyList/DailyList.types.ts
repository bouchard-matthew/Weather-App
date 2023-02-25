import { Daily } from "Types/types";

export interface Props extends SharedProps {}

export interface SharedProps {
  daily: Daily[];
  loading: Boolean;
}
