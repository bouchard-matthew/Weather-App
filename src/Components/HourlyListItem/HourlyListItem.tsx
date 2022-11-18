import dayjs from "dayjs";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Importing Functions
import { returnUnitSpeed, returnUnitTemperature } from "Utils/dataFunctions";
import { capitalizeFirstLetter } from "Utils/stringFunctions";
import { HourlyListItemProps } from "./HourlyListItem.types";

const StyledListItem = styled("div")(() => ({
  display: "flex",
  "& p, & svg": {
    margin: "auto 0",
  },
}));

const HourlyListItem = ({ item, units }: HourlyListItemProps) => {
  return (
    <>
      {dayjs(item.dt * 1000).format("hha") === "12am" && (
        <Box sx={{ background: "lightgrey", padding: "15px 10px", textAlign: "center" }}>{dayjs(item.dt * 1000).format("dddd, MMMM D")}</Box>
      )}
      <Accordion sx={{ border: "1px solid black" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Box sx={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
            <StyledListItem>
              <Typography>{dayjs(item.dt * 1000).format("hh:MM A")}</Typography>
            </StyledListItem>

            <StyledListItem>
              <Typography>
                {Math.round(item.temp)}° {returnUnitTemperature(units)}
              </Typography>
            </StyledListItem>

            <StyledListItem>
              <Typography sx={{ margin: "auto 0" }}>{capitalizeFirstLetter(item.weather[0].description)}</Typography>{" "}
              <img alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
            </StyledListItem>

            <StyledListItem>
              <OpacityIcon style={{ color: "blue" }} />
              <Typography>{item.pop * 100}%</Typography>
            </StyledListItem>

            <StyledListItem>
              <AirIcon style={{ color: "blue" }} />
              <Typography>
                {Math.round(item.wind_speed)} {returnUnitSpeed(units)}
              </Typography>
            </StyledListItem>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default HourlyListItem;