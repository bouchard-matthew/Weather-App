import dayjs from "dayjs";
import { Accordion, AccordionSummary, AccordionDetails, Container } from "@mui/material";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpacityIcon from "@mui/icons-material/Opacity";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ShowerIcon from "@mui/icons-material/Shower";
import CloudIcon from "@mui/icons-material/Cloud";
import AirIcon from "@mui/icons-material/Air";
import { Box, Typography } from "@mui/material";

// Imprting Styled Components
import { StyledListItem, AccordionListItem } from "StyledComponents/Style";

// Importing Functions
import { degToCard, returnUnitSpeed, returnUnitTemperature } from "Utils/dataFunctions";
import { capitalizeFirstLetter } from "Utils/stringFunctions";
import { HourlyListItemProps } from "./HourlyListItem.types";

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
              <Typography sx={{ margin: "auto 0" }}>{capitalizeFirstLetter(item.weather[0].description)}</Typography>
              <img alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
            </StyledListItem>

            <StyledListItem>
              <OpacityIcon style={{ color: "blue" }} />
              <Typography>{Math.round(item.pop * 100)}%</Typography>
            </StyledListItem>

            <StyledListItem>
              <AirIcon style={{ color: "blue" }} />
              <Typography>
                {degToCard(item.wind_deg)} {Math.round(item.wind_speed)} {returnUnitSpeed(units)}
              </Typography>
            </StyledListItem>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Container sx={{ marginBottom: "15px", display: "flex", justifyContent: "space-evenly" }}>
            <AccordionListItem>
              <DeviceThermostatIcon style={{ color: "blue" }} />
              <Typography>
                Feels like <br />
                {Math.round(item.feels_like)}°
              </Typography>
            </AccordionListItem>
            <AccordionListItem>
              <AirIcon style={{ color: "blue" }} />
              <Typography>
                Wind <br />
                {degToCard(item.wind_deg)} {Math.round(item.wind_speed)} {returnUnitSpeed(units)}
              </Typography>
            </AccordionListItem>
            <AccordionListItem>
              <OpacityIcon style={{ color: "blue" }} />
              <Typography>
                Humidity <br /> {Math.round(item.humidity)}%
              </Typography>
            </AccordionListItem>
          </Container>
          <hr />
          <Container sx={{ marginBottom: "15px", marginTop: "15px", display: "flex", justifyContent: "space-evenly" }}>
            <AccordionListItem>
              <WbSunnyIcon style={{ color: "blue" }} />
              <Typography>
                UV Index <br />
                {Math.round(item.uvi)} of 10
              </Typography>
            </AccordionListItem>
            <AccordionListItem>
              <CloudIcon style={{ color: "blue" }} />
              <Typography>
                Cloud Cover <br /> {Math.round(item.clouds)}%
              </Typography>
            </AccordionListItem>
            <AccordionListItem>
              <ShowerIcon style={{ color: "blue" }} />
              <Typography>
                Precip Amount <br />
                {Math.round(item.pop)}%
              </Typography>
            </AccordionListItem>
          </Container>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default HourlyListItem;
