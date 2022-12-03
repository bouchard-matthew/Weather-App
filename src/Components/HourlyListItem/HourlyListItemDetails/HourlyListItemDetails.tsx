import React from "react";
import { Box } from "@mui/material";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ShowerIcon from "@mui/icons-material/Shower";
import CloudIcon from "@mui/icons-material/Cloud";
import AirIcon from "@mui/icons-material/Air";

// Imprting Styled Components
import { AccordionListItem } from "StyledComponents/Style";
import { Paragraph } from "Design";

import { degToCard, returnUnitSpeed } from "Utils/dataFunctions";
import { Props } from "./HourlyListItemDetails.types";

const HourlyListItemDetails = ({ item, units }: Props) => {
  return (
    <>
      <Box sx={{ marginBottom: "15px", display: "flex", justifyContent: "space-evenly" }}>
        <AccordionListItem>
          <DeviceThermostatIcon style={{ color: "blue" }} />
          <Paragraph>
            Feels like <br />
            {Math.round(item.feels_like)}°
          </Paragraph>
        </AccordionListItem>
        <AccordionListItem>
          <AirIcon style={{ color: "blue" }} />
          <Paragraph>
            Wind <br />
            {degToCard(item.wind_deg)} {Math.round(item.wind_speed)} {returnUnitSpeed(units)}
          </Paragraph>
        </AccordionListItem>
        <AccordionListItem>
          <OpacityIcon style={{ color: "blue" }} />
          <Paragraph>
            Humidity <br /> {Math.round(item.humidity)}%
          </Paragraph>
        </AccordionListItem>
      </Box>
      <hr />
      <Box sx={{ marginBottom: "15px", marginTop: "15px", display: "flex", justifyContent: "space-evenly" }}>
        <AccordionListItem>
          <WbSunnyIcon style={{ color: "blue" }} />
          <Paragraph>
            UV Index <br />
            {Math.round(item.uvi)} of 10
          </Paragraph>
        </AccordionListItem>
        <AccordionListItem>
          <CloudIcon style={{ color: "blue" }} />
          <Paragraph>
            Cloud Cover <br /> {Math.round(item.clouds)}%
          </Paragraph>
        </AccordionListItem>
        <AccordionListItem>
          <ShowerIcon style={{ color: "blue" }} />
          <Paragraph>
            Precip Amount <br />
            {Math.round(item.pop)}%
          </Paragraph>
        </AccordionListItem>
      </Box>
    </>
  );
};

export default HourlyListItemDetails;
