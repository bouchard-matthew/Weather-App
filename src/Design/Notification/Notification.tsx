import { Alert, AlertProps } from "@mui/material";

interface Props extends AlertProps {}

const Notification = (props: Props) => {
  return <Alert {...props} severity={"warning"} sx={{ "& div:nth-of-type(2)": { width: "100%" }, "& div:not(:nth-of-type(2))": { alignItems: "center" } }} />;
};

export default Notification;
