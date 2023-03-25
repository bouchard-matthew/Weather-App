import AlertItem from "./AlertItem";
import type { SharedProps } from "./AlertItem.types";

const AlertItemContainer = ({ alert, index }: SharedProps) => {
  const formatAlertDescription = (str: string) => {
    let splitInput = str.split(/[(\\*.{3})]+/g);
    let emptyString = "";
    let alertDescription = splitInput.map((item) => (item !== "" ? emptyString + `${item} <br />` : "")).join("");
    // console.log("String: ", str);
    // console.log(splitInput);
    return alertDescription;
  };

  return <AlertItem alert={alert} index={index} formatAlert={formatAlertDescription} />;
};

export default AlertItemContainer;
