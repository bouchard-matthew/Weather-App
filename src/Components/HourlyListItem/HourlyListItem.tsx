import { Box, Typography } from "@mui/material";
import { HourlyObject, Units } from "Types/types";
import { styled } from "@mui/material/styles";
import { capitalizeFirstLetter } from "Utils/stringFunctions";
import moment from "moment";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledListItem = styled("div")(() => ({
  display: "flex",
  "& p, & svg": {
    margin: "auto 0",
  },
}));

interface Props {
  item: HourlyObject;
  units: Units;
}

const HourlyListItem = ({ item, units }: Props) => {
  return (
    <>
      {moment(item.dt * 1000).format("hha") == "12am" && (
        <Box sx={{ background: "lightgrey", padding: "15px 10px", textAlign: "center" }}>{moment(item.dt * 1000).format("dddd, MMMM Do")}</Box>
      )}
      <Accordion sx={{ border: "1px solid black" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Box sx={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
            <StyledListItem>
              <Typography>{moment(item.dt * 1000).format("hh:MM A")}</Typography>
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

const returnUnitSpeed = (unit: Units): string => {
  switch (unit) {
    case Units.imperial:
      return "mph";
    default:
      return "kph";
  }
};

const returnUnitTemperature = (unit: Units): string => {
  switch (unit) {
    case Units.imperial:
      return "F";
    default:
      return "C";
  }
};

export default HourlyListItem;
