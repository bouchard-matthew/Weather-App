import { useAlert } from "Hooks/useAlert";
import Alert from "./Alert";

const AlertContainer = () => {
  return <Alert alerts={useAlert()} />;
};

export default AlertContainer;
