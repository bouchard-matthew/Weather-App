import { Typography, TypographyProps } from "@mui/material";

interface Props extends TypographyProps {}

const Paragraph = (props: Props) => {
  return <Typography {...props} sx={{ fontWeight: "bold", paddingX: "5px", margin: "auto 0" }} />;
};

export default Paragraph;
