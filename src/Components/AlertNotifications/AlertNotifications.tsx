import { useAlert } from "Hooks/useAlert";
import { Box } from "@mui/material";
import { AlertNotification } from "Components/AlertNotification";

const AlertNotifications = () => {
  const alerts = useAlert();
  return (
    <>
      {alerts?.map((alert, idx: number) => {
        return (
          <Box sx={{ "& p:hover": { cursor: "pointer" } }} key={idx}>
            <AlertNotification alert={alert} />
          </Box>
        );
      })}
    </>
  );
};

export default AlertNotifications;
