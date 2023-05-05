import { Paper } from "@mui/material";
import { PaperProps } from "@mui/material/Paper";

interface Props extends PaperProps {}

const Container = (props: Props) => {
  return <Paper {...props} elevation={6} sx={{ margin: "1% 5%" }} />;
};

export default Container;
