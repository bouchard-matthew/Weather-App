import { AlertInterface } from "Types/types";
import { Box } from "@mui/material";
import { AlertItem } from "Components/AlertItem";

interface Props {
  alerts: AlertInterface[] | undefined;
}

const Alert = ({ alerts }: Props) => {
  return (
    <>
      {alerts?.map((item, idx) => {
        return (
          <Box key={idx}>
            <AlertItem alert={item} />
          </Box>
        );
      })}
    </>
  );
};

export default Alert;
