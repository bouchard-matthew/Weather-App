import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Paragraph } from "Design";
import { ChildProps } from "./AlertItem.types";

const AlertItem = ({ alert, index }: ChildProps) => {
  const replaceAsterisks = (str: string) => {
    let arr = str.split(/[*...]/g);
    let res = "";
    arr.map((item) => {
      if (item !== "") {
        return (res += `${item} <br />`);
      }
    });
    return res;
  };

  return (
    <Accordion defaultExpanded={index == 0} style={{ backgroundColor: "transparent" }}>
      <AccordionSummary>
        <Paragraph fontWeight="bold" textAlign={"center"} width="100%">
          {alert.sender_name} | {alert.event}
        </Paragraph>
      </AccordionSummary>
      <AccordionDetails sx={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: replaceAsterisks(alert.description) }}></AccordionDetails>
    </Accordion>
  );
};

export default AlertItem;
