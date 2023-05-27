import { AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dayjs from "dayjs";
import { HeaderSection, Toggle } from "Design";
import { HourlyListItemDetails } from "./HourlyListItemDetails";
import { HourlyListItemSummary } from "./HourlyListItemSummary";

import type { Props } from "./HourlyListItem.types";

const HourlyListItem = ({ item }: Props) => {
  return (
    <>
      {dayjs(item.dt * 1000).format("hha") === "12am" && <HeaderSection>{dayjs(item.dt * 1000).format("dddd, MMMM D")}</HeaderSection>}
      <Toggle>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <HourlyListItemSummary item={item} />
        </AccordionSummary>
        <AccordionDetails>
          <HourlyListItemDetails item={item} />
        </AccordionDetails>
      </Toggle>
    </>
  );
};

export default HourlyListItem;
