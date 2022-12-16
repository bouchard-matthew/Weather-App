import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DailyListItemSummary } from "./DailyListItemSummary";
import { DailyListItemsDetails } from "./DailyListItemDetails";
import { Props } from "./DailyListItem.types";

const DailyListItem = ({ item, units, index }: Props) => {
  return (
    <>
      <Accordion defaultExpanded={index === 0} sx={{ border: "1px solid black" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <DailyListItemSummary item={item} index={index} units={units} />
        </AccordionSummary>
        <AccordionDetails>
          <DailyListItemsDetails item={item} units={units} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DailyListItem;
