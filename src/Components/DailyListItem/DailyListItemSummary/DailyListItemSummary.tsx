import dayjs from "dayjs";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import { Flex, ListItem, Paragraph } from "Design";
import { useCardinality } from "Hooks/useCardinality";
import { useUnitTemperature } from "Hooks/useUnitTemperature";
import { useUnitSpeed } from "Hooks/useUnitSpeed";

import type { Props } from "./DailyListItemSummary.types";
import Image from "next/image";
import { useCapitalizeFirstLetter } from "Hooks/useCapitalizeFirstLetter";

const DailyListItemSummary = ({ item, index }: Props) => {
  const cardinalityDisplayValue = useCardinality(item.wind_deg);
  const daytimeTemperatureDisplayValue = useUnitTemperature(item.temp.day);
  const nightTemperatureDisplayValue = useUnitTemperature(item.temp.night);
  const windSpeedDisplayValue = useUnitSpeed(item.wind_speed);
  const descriptionDisplayValue = useCapitalizeFirstLetter(item.weather[0].description);

  return (
    <>
      <Flex>
        <ListItem>
          <Paragraph>{index === 0 ? "Today" : dayjs(item.dt * 1000).format("ddd D")}</Paragraph>
        </ListItem>

        <ListItem sx={{ display: { xs: "none", md: "flex" } }}>
          <Paragraph>
            {daytimeTemperatureDisplayValue}° / {nightTemperatureDisplayValue}
          </Paragraph>
        </ListItem>

        <ListItem>
          <Image width={50} height={50} alt={descriptionDisplayValue} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
          <Paragraph>{descriptionDisplayValue}</Paragraph>
        </ListItem>

        <ListItem sx={{ display: { xs: "none", sm: "flex" } }}>
          <OpacityIcon style={{ color: "blue" }} />
          <Paragraph>{Math.round(item.pop * 100)}%</Paragraph>
        </ListItem>

        <ListItem sx={{ display: { xs: "none", md: "flex" } }}>
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
