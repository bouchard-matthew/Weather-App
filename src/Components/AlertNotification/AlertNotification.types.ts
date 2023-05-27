import { AlertInterface } from "Types/types";

export interface Props {
  alert: AlertInterface;
}

export interface RenderComponentProps {
  alert: AlertInterface;
  open: boolean;
  setOpen: (open: boolean) => void;
  navigate: (link: string) => void;
}
