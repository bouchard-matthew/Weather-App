import React, { useEffect } from "react";
import { Props } from "./AlertNotification.types";
import AlertNotification from "./AlertNotification";
import { useNavigate } from "react-router-dom";

const AlertNotificationContainer = ({ alert }: Props) => {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(true);
  }, [alert]);

  return <AlertNotification alert={alert} open={open} setOpen={setOpen} navigate={navigate} />;
};

export default AlertNotificationContainer;
