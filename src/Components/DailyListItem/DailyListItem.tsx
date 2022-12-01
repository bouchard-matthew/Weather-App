import React from "react";
import { Daily, Units } from "Types/types";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import dayjs from "dayjs";

import { StyledListItem } from "StyledComponents/Style";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";

import { returnUnitTemperature, degToCard, returnUnitSpeed, returnMoonPhase } from "Utils/dataFunctions";
import { capitalizeFirstLetter } from "Utils/stringFunctions";

interface Props {
  item: Daily;
  units: Units;
  index: number;
}

const DailyListItem = ({ item, units, index }: Props) => {
  return (
    <>
      <Accordion sx={{ border: "1px solid black" }} defaultExpanded={index == 0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Box sx={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
            <StyledListItem>
              <Typography>{index == 0 ? "Today" : dayjs(item.dt * 1000).format("ddd D")}</Typography>
            </StyledListItem>

            <StyledListItem>
              <Typography>
                {Math.round(item.temp.day)}° / {Math.round(item.temp.night)}°
              </Typography>
            </StyledListItem>

            <StyledListItem>
              <img alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
              <Typography sx={{ margin: "auto 0" }}>{capitalizeFirstLetter(item.weather[0].description)}</Typography>
            </StyledListItem>

            <StyledListItem>
              <OpacityIcon style={{ color: "blue" }} />
              <Typography>{item.pop * 100}%</Typography>
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
          <Box sx={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
            <Box
              sx={{
                "&": {
                  width: "100%",
                },
                "& p": {
                  textAlign: "center",
                },
                "& img": {
                  margin: "auto",
                },
              }}
            >
              <img alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
              <Typography>{dayjs(item.dt * 1000).format("ddd D")} | Day</Typography>
              <Typography>{Math.round(item.temp.day)}°</Typography>
              <br />
              <Typography>Sunrise at {dayjs(item.sunrise * 1000).format("h:mm A")}</Typography>
              <Typography>Sunset at {dayjs(item.sunset * 1000).format("h:mm A")}</Typography>
              <Typography>
                UV Index | <sup>{Math.round(item.uvi)}</sup>&frasl;<sub>10</sub>
              </Typography>
            </Box>
            <hr />
            <Box
              sx={{
                "&": {
                  width: "100%",
                },
                "& p": {
                  textAlign: "center",
                },
                "& img": {
                  margin: "auto",
                },
              }}
            >
              <img alt="" src="http://openweathermap.org/img/wn/01n@2x.png" />
              <Typography>{dayjs(item.dt * 1000).format("ddd D")} | Night</Typography>
              <Typography>{Math.round(item.temp.night)}°</Typography>
              <br />
              <Typography>Moonrise at {dayjs(item.moonrise * 1000).format("h:mm A")}</Typography>
              <Typography>Moonset at {dayjs(item.moonset * 1000).format("h:mm A")}</Typography>
              <Typography>Moon Phase | {returnMoonPhase(item.moon_phase)}</Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DailyListItem;
