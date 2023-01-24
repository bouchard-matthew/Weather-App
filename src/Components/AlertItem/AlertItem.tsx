import { Accordion, AccordionDetails, AccordionSummary, Box, Collapse } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Notification, Paragraph } from "Design";
import React from "react";
import { ChildProps } from "./AlertItemContainer";

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

const AlertItem = ({ alert, open, setOpen }: ChildProps) => {
  return (
    <Box>
      <Collapse in={open}>
        <Notification
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <Accordion>
            <AccordionSummary>
              <Paragraph textAlign={"center"} width="100%">
                {alert.sender_name} | {alert.event}
              </Paragraph>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: replaceAsterisks(alert.description) }}></AccordionDetails>
          </Accordion>
        </Notification>
      </Collapse>
    </Box>
  );
};

export default AlertItem;
