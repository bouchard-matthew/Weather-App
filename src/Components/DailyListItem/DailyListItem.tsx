import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { DailyListItemsDetails } from "./DailyListItemDetails";
import { DailyListItemSummary } from "./DailyListItemSummary";

import type { Props } from "./DailyListItem.types";

const DailyListItem = ({ item, index }: Props) => {
  return (
    <>
      <Accordion defaultExpanded={index === 0} sx={{ border: "1px solid black" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <DailyListItemSummary item={item} index={index} />
        </AccordionSummary>
        <AccordionDetails>
          <DailyListItemsDetails item={item} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DailyListItem;
