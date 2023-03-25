import dayjs from "dayjs";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import { Flex, ListItem, Paragraph } from "Design";
import { useCardinality } from "Hooks/useCardinality";
import { useUnitTemperature } from "Hooks/useUnitTemperature";
import { useUnitSpeed } from "Hooks/useUnitSpeed";
import { capitalizeFirstLetter } from "Utils/stringFunctions";

import type { Props } from "./DailyListItemSummary.types";

const DailyListItemSummary = ({ item, index }: Props) => {
  const cardinalityDisplayValue = useCardinality(item.wind_deg);
  const daytimeTemperatureDisplayValue = useUnitTemperature(item.temp.day);
  const nightTemperatureDisplayValue = useUnitTemperature(item.temp.night);
  const windSpeedDisplayValue = useUnitSpeed(item.wind_speed);

  return (
    <>
      <Flex>
        <ListItem>
          <Paragraph>{index === 0 ? "Today" : dayjs(item.dt * 1000).format("ddd D")}</Paragraph>
        </ListItem>

        <ListItem sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          <Paragraph>
            {daytimeTemperatureDisplayValue}° / {nightTemperatureDisplayValue}
          </Paragraph>
        </ListItem>

        <ListItem>
          <img alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
          <Paragraph>{capitalizeFirstLetter(item.weather[0].description)}</Paragraph>
        </ListItem>

        <ListItem sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
          <OpacityIcon style={{ color: "blue" }} />
          <Paragraph>{Math.round(item.pop * 100)}%</Paragraph>
        </ListItem>

        <ListItem sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          <AirIcon style={{ color: "blue" }} />
          <Paragraph>
            {cardinalityDisplayValue} {windSpeedDisplayValue}
          </Paragraph>
        </ListItem>
      </Flex>
    </>
  );
};

export default DailyListItemSummary;
