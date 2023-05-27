import { AlertInterface } from "Types/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export interface Props {
  alert: AlertInterface;
}

export interface RenderComponentProps {
  alert: AlertInterface;
  open: boolean;
  setOpen: (open: boolean) => void;
  router: AppRouterInstance;
}
