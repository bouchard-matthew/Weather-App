import { Box, BoxProps } from "@mui/material";

interface Props extends BoxProps {}

const HeaderSection = (props: Props) => {
  return <Box {...props} sx={{ background: "lightgrey", padding: "15px 10px", textAlign: "center" }} />;
};

export default HeaderSection;
