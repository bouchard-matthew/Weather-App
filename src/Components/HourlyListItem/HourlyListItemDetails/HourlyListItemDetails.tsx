import React from "react";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ShowerIcon from "@mui/icons-material/Shower";
import CloudIcon from "@mui/icons-material/Cloud";
import AirIcon from "@mui/icons-material/Air";

// Imprting Styled Components
import { Paragraph, Flex, ListItem } from "Design";

// Import Utils Functions
import { returnCardinality, returnUnitSpeed, returnUnitTemperature } from "Utils/dataFunctions";

import { Props } from "./HourlyListItemDetails.types";

const HourlyListItemDetails = ({ item, units }: Props) => {
  return (
    <>
      <Flex sx={{ marginBottom: "15px", justifyContent: "space-evenly" }}>
        <ListItem>
          <DeviceThermostatIcon style={{ color: "blue" }} />
          <Paragraph>
            Feels like <br />
            {returnUnitTemperature(item.feels_like, units)}
          </Paragraph>
        </ListItem>
        <ListItem>
          <AirIcon style={{ color: "blue" }} />
          <Paragraph>
            Wind <br />
            {returnCardinality(item.wind_deg)} {returnUnitSpeed(item.wind_speed, units)}
          </Paragraph>
        </ListItem>
        <ListItem>
          <OpacityIcon style={{ color: "blue" }} />
          <Paragraph>
            Humidity <br /> {Math.round(item.humidity)}%
          </Paragraph>
        </ListItem>
      </Flex>
      <hr />
      <Flex sx={{ marginBottom: "15px", marginTop: "15px", justifyContent: "space-evenly" }}>
        <ListItem>
          <WbSunnyIcon style={{ color: "blue" }} />
          <Paragraph>
            UV Index <br />
            {Math.round(item.uvi)} of 10
          </Paragraph>
        </ListItem>
        <ListItem>
          <CloudIcon style={{ color: "blue" }} />
          <Paragraph>
            Cloud Cover <br /> {Math.round(item.clouds)}%
          </Paragraph>
        </ListItem>
        <ListItem>
          <ShowerIcon style={{ color: "blue" }} />
          <Paragraph>
            Precip Amount <br />
            {Math.round(item.pop)}%
          </Paragraph>
        </ListItem>
      </Flex>
    </>
  );
};

export default HourlyListItemDetails;
