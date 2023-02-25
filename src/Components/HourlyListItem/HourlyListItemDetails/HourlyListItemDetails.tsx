import React from "react";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ShowerIcon from "@mui/icons-material/Shower";
import CloudIcon from "@mui/icons-material/Cloud";
import AirIcon from "@mui/icons-material/Air";

import { Paragraph, Flex, ListItem } from "Design";

import { Props } from "./HourlyListItemDetails.types";

import { useCardinality } from "Hooks/useCardinality";
import { useUnitSpeed } from "Hooks/useUnitSpeed";
import { useUnitTemperature } from "Hooks/useUnitTemperature";

const HourlyListItemDetails = ({ item }: Props) => {
  const cardinalityDisplayValue = useCardinality(item);
  const windSpeedDisplayValue = useUnitSpeed(item);
  const temperatureDisplayValue = useUnitTemperature(item.feels_like);

  return (
    <>
      <Flex sx={{ marginBottom: "15px" }}>
        <ListItem>
          <DeviceThermostatIcon />
          <Paragraph>
            Feels like <br /> {temperatureDisplayValue}
          </Paragraph>
        </ListItem>

        <ListItem>
          <AirIcon />
          <Paragraph>
            Wind <br /> {cardinalityDisplayValue} {windSpeedDisplayValue}
          </Paragraph>
        </ListItem>

        <ListItem>
          <OpacityIcon />
          <Paragraph>
            Humidity <br /> {Math.round(item.humidity)}%
          </Paragraph>
        </ListItem>
      </Flex>

      <hr />

      <Flex sx={{ marginBottom: "15px", marginTop: "15px" }}>
        <ListItem>
          <WbSunnyIcon />
          <Paragraph>
            UV Index <br /> {Math.round(item.uvi)} of 10
          </Paragraph>
        </ListItem>

        <ListItem>
          <CloudIcon />
          <Paragraph>
            Cloud Cover <br /> {Math.round(item.clouds)}%
          </Paragraph>
        </ListItem>

        <ListItem>
          <ShowerIcon />
          <Paragraph>
            Precip Amount <br /> {Math.round(item.pop)}%
          </Paragraph>
        </ListItem>
      </Flex>
    </>
  );
};

export default HourlyListItemDetails;
