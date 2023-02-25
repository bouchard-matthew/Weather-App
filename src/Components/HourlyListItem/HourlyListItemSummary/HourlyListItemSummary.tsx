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
  const cardinalityDisplayValue = useCardinality(item);
  const temperatureDisplayValue = useUnitTemperature(item.feels_like);
  const windSpeedDisplayValue = useUnitSpeed(item);

  return (
    <>
      <Flex>
        <ListItem>
          <Paragraph>{dayjs(item.dt * 1000).format("h:MM A")}</Paragraph>
        </ListItem>

        <ListItem>
          <Paragraph>{temperatureDisplayValue}</Paragraph>
        </ListItem>

        <ListItem>
          <Paragraph>{capitalizeFirstLetter(item.weather[0].description)}</Paragraph>
          <img alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
        </ListItem>

        <ListItem>
          <OpacityIcon />
          <Paragraph>{Math.round(item.pop * 100)}%</Paragraph>
        </ListItem>

        <ListItem>
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
