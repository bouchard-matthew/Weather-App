import { Accordion, AccordionProps } from "@mui/material";

interface Props extends AccordionProps {}

const Toggle = (props: Props) => {
  return <Accordion {...props} sx={{ border: "1px solid black" }} />;
};

export default Toggle;
