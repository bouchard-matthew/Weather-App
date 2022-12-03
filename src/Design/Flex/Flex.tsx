import { Box, BoxProps } from "@mui/material";

interface Props extends BoxProps {}

const Flex = (props: Props) => {
  return <Box {...props} display="flex" />;
};

export default Flex;
