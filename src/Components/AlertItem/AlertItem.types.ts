import { AlertInterface } from "Types/types";

export interface Props extends SharedProps {
  formatAlert: (str: string) => string;
}

export interface SharedProps {
  alert: AlertInterface;
  index: number;
}
