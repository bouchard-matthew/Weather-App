import React from "react";
import dayjs from "dayjs";

import { Flex, ListItem, Paragraph } from "Design";
import { capitalizeFirstLetter } from "Utils/stringFunctions";
import { degToCard, returnUnitSpeed, returnUnitTemperature } from "Utils/dataFunctions";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import { Props } from "./HourlyListItemSummary.types";

const HourlyListItemSummary = ({ item, units }: Props) => {
  return (
    <>
      <Flex sx={{ width: "100%", justifyContent: "space-evenly" }}>
        <ListItem>
          <Paragraph>{dayjs(item.dt * 1000).format("hh:MM A")}</Paragraph>
        </ListItem>

        <ListItem>
          <Paragraph>
            {Math.round(item.temp)}° {returnUnitTemperature(units)}
          </Paragraph>
        </ListItem>

        <ListItem>
          <Paragraph sx={{ margin: "auto 0" }}>{capitalizeFirstLetter(item.weather[0].description)}</Paragraph>
          <img alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
        </ListItem>

        <ListItem>
          <OpacityIcon style={{ color: "blue" }} />
          <Paragraph>{Math.round(item.pop * 100)}%</Paragraph>
        </ListItem>

        <ListItem>
          <AirIcon style={{ color: "blue" }} />
          <Paragraph>
            {degToCard(item.wind_deg)} {Math.round(item.wind_speed)} {returnUnitSpeed(units)}
          </Paragraph>
        </ListItem>
      </Flex>
    </>
  );
};

export default HourlyListItemSummary;
