import { useEffect } from "react";
import { useAlert } from "Hooks/useAlert";
import AlertPage from "./AlertPage";
import { useNavigate } from "react-router-dom";

const AlertPageContainer = () => {
  const alerts = useAlert();
  const navigate = useNavigate();
  useEffect(() => {
    if (!alerts) navigate("/");
  }, [alerts, navigate]);
  return <AlertPage alerts={alerts} />;
};

export default AlertPageContainer;
