import React from "react";
import { AlertInterface } from "Types/types";
import AlertItem from "./AlertItem";

export interface ChildProps {
  alert: AlertInterface;
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface Props {
  alert: AlertInterface;
}

const AlertItemContainer = ({ alert }: Props) => {
  const [open, setOpen] = React.useState(true);

  return <AlertItem alert={alert} open={open} setOpen={setOpen} />;
};

export default AlertItemContainer;
