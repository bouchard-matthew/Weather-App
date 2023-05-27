import { Accordion, AccordionProps } from "@mui/material";

interface Props extends AccordionProps {}

const Toggle = (props: Props) => {
  return <Accordion {...props} />;
};

export default Toggle;
