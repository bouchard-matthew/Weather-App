import { AlertInterface } from "Types/types";

export interface Props extends SharedProps {
  formatAlert: (alert: string) => string;
}

export interface SharedProps {
  alert: AlertInterface;
  index: number;
}
