import { Box, BoxProps } from "@mui/material";

interface Props extends BoxProps {}

const Loading = (props: Props) => {
  return <Box {...props} sx={{ height: "100vh", textAlign: "center", "& span": { position: "absolute", top: "50%", transform: "translate(0, -50%)" } }} />;
};

export default Loading;
