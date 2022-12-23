import React from "react";
import { Props } from "./AlertItem.types";
import AlertItem from "./AlertItem";

const AlertItemContainer = ({ alert, index }: Props) => {
  return <AlertItem alert={alert} index={index} />;
};

export default AlertItemContainer;
