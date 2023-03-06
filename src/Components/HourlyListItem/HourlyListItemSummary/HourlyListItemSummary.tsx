import React from "react";
import dayjs from "dayjs";

import { Flex, ListItem, Paragraph } from "Design";
import { capitalizeFirstLetter } from "Utils/stringFunctions";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import { Props } from "./HourlyListItemSummary.types";
import { useUnitTemperature } from "Hooks/useUnitTemperature";
import { useCardinality } from "Hooks/useCardinality";
import { useUnitSpeed } from "Hooks/useUnitSpeed";

const HourlyListItemSummary = ({ item }: Props) => {
  const cardinalityDisplayValue = useCardinality(item.wind_deg);
  const temperatureDisplayValue = useUnitTemperature(item.feels_like);
  const windSpeedDisplayValue = useUnitSpeed(item.wind_speed);

  return (
    <>
      <Flex>
        <ListItem>
          <Paragraph>{dayjs(item.dt * 1000).format("h:MM A")}</Paragraph>
        </ListItem>

        <ListItem sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          <Paragraph>{temperatureDisplayValue}</Paragraph>
        </ListItem>

        <ListItem>
          <Paragraph>{capitalizeFirstLetter(item.weather[0].description)}</Paragraph>
          <img alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
        </ListItem>

        <ListItem sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
          <OpacityIcon />
          <Paragraph>{Math.round(item.pop * 100)}%</Paragraph>
        </ListItem>

        <ListItem sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          <AirIcon />
          <Paragraph>
            {cardinalityDisplayValue} {windSpeedDisplayValue}
          </Paragraph>
        </ListItem>
      </Flex>
    </>
  );
};

export default HourlyListItemSummary;
