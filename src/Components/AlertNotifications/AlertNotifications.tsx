import { useAlert } from "Hooks/useAlert";
import { Box } from "@mui/material";
import { AlertNotification } from "Components/AlertNotification";

const AlertNotifications = () => {
  const alerts = useAlert();
  return (
    <>
      {alerts?.map((alert) => {
        return (
          <Box sx={{ "& p:hover": { cursor: "pointer" } }} key={alert.description}>
            <AlertNotification alert={alert} />
          </Box>
        );
      })}
    </>
  );
};

export default AlertNotifications;
