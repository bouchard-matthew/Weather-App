import { useEffect } from "react";
import { useAlert } from "Hooks/useAlert";
import AlertPage from "./AlertPage";
import { useRouter } from "next/navigation";

const AlertPageContainer = () => {
  const alerts = useAlert();
  const router = useRouter();
  useEffect(() => (!alerts ? router.push("/") : undefined), [alerts, router]);
  return <AlertPage alerts={alerts} />;
};

export default AlertPageContainer;
