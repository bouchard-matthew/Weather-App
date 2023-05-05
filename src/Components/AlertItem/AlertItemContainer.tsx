import AlertItem from "./AlertItem";
import type { SharedProps } from "./AlertItem.types";

const AlertItemContainer = ({ alert, index }: SharedProps) => {
  const formatAlertDescription = (str: string) => {
    return str
      .split(/[(\\*...)]+/g)
      .map((item) => (item !== "" ? `${item} <br />` : ""))
      .join("");
  };

  return <AlertItem alert={alert} index={index} formatAlert={formatAlertDescription} />;
};

export default AlertItemContainer;
