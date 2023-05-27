import dayjs from "dayjs";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Importing Components
import { Props } from "./HourlyListItem.types";
import { HourlyListItemSummary } from "./HourlyListItemSummary";
import { HourlyListItemDetails } from "./HourlyListItemDetails";
import { HeaderSection, Toggle } from "Design";

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
