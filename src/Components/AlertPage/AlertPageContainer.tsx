import { useAlert } from "Hooks/useAlert";
import React from "react";
import AlertPage from "./AlertPage";

const AlertPageContainer = () => {
  const alerts = useAlert();
  return <AlertPage alerts={alerts} />;
};

export default AlertPageContainer;
