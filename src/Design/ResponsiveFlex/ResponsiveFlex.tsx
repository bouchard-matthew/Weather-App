import { BoxProps } from "@mui/material";
import { Flex } from "Design/Flex";

interface Props extends BoxProps {}

const ResponsiveFlex = (props: Props) => {
  return <Flex {...props} sx={{ my: { xs: "0px", sm: "15px" }, flexDirection: { xs: "column", sm: "row" } }} />;
};

export default ResponsiveFlex;
