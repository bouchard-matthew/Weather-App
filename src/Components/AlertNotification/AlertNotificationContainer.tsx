import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertNotification from "./AlertNotification";
import type { Props } from "./AlertNotification.types";

const AlertNotificationContainer = ({ alert }: Props) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(true);
  }, [alert]);

  return <AlertNotification alert={alert} open={open} setOpen={setOpen} navigate={navigate} />;
};

export default AlertNotificationContainer;
