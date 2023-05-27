import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AlertNotification from "./AlertNotification";
import type { Props } from "./AlertNotification.types";

const AlertNotificationContainer = ({ alert }: Props) => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setOpen(true);
  }, [alert]);

  return <AlertNotification alert={alert} open={open} setOpen={setOpen} router={router} />;
};

export default AlertNotificationContainer;
