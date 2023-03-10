import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Paragraph } from "Design";
import type { Props } from "./AlertItem.types";

const AlertItem = ({ alert, index, formatAlert }: Props) => {
  return (
    <Accordion defaultExpanded={index === 0}>
      <AccordionSummary>
        <Paragraph fontWeight="bold" width="100%">
          {alert.sender_name} | {alert.event}
        </Paragraph>
      </AccordionSummary>
      <AccordionDetails sx={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: formatAlert(alert.description) }}></AccordionDetails>
    </Accordion>
  );
};

export default AlertItem;
