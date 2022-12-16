import dayjs from "dayjs";
import { Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Importing Functions
import { HourlyListItemProps } from "./HourlyListItem.types";
import { HourlyListItemSummary } from "./HourlyListItemSummary";
import { HourlyListItemDetails } from "./HourlyListItemDetails";

const HourlyListItem = ({ item, units }: HourlyListItemProps) => {
  return (
    <>
      {dayjs(item.dt * 1000).format("hha") === "12am" && (
        <Box sx={{ background: "lightgrey", padding: "15px 10px", textAlign: "center" }}>{dayjs(item.dt * 1000).format("dddd, MMMM D")}</Box>
      )}
      <Accordion sx={{ border: "1px solid black" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <HourlyListItemSummary item={item} units={units} />
        </AccordionSummary>
        <AccordionDetails>
          <HourlyListItemDetails item={item} units={units} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default HourlyListItem;
