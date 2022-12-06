import { Current } from "Types/types";

export interface Props extends SharedProps {}

interface SharedProps {
  current: Current | undefined;
  name: string | undefined;
}
