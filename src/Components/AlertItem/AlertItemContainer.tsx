import useFormatAlert from "Hooks/useFormatAlert/useFormatAlert";
import AlertItem from "./AlertItem";
import type { SharedProps } from "./AlertItem.types";

const AlertItemContainer = ({ alert, index }: SharedProps) => {
  return <AlertItem alert={alert} index={index} formatAlert={useFormatAlert()} />;
};

export default AlertItemContainer;
