import { Box, BoxProps } from "@mui/material";

interface Props extends BoxProps {}

const Flex = (props: Props) => {
  return <Box {...props} display="flex" width="100%" justifyContent="space-evenly" />;
};

export default Flex;
