import dayjs from "dayjs";
import AirIcon from "@mui/icons-material/Air";
import ShowerIcon from "@mui/icons-material/Shower";
import { Flex, ListItem, Paragraph } from "Design";
import { useCardinality } from "Hooks/useCardinality";
import { useUnitSpeed } from "Hooks/useUnitSpeed";
import { useUnitTemperature } from "Hooks/useUnitTemperature";

import type { Props } from "./HourlyListItemSummary.types";
import Image from "next/image";
import { useCapitalizeFirstLetter } from "Hooks/useCapitalizeFirstLetter";

const HourlyListItemSummary = ({ item }: Props) => {
  const cardinalityDisplayValue = useCardinality(item.wind_deg);
  const temperatureDisplayValue = useUnitTemperature(item.feels_like);
  const windSpeedDisplayValue = useUnitSpeed(item.wind_speed);
  const descriptionDisplayValue = useCapitalizeFirstLetter(item.weather[0].description);

  return (
    <>
      <Flex>
        <ListItem>
          <Paragraph>{dayjs(item.dt * 1000).format("h:mm A")}</Paragraph>
        </ListItem>

        <ListItem sx={{ display: { xs: "none", md: "flex" } }}>
          <Paragraph>{temperatureDisplayValue}</Paragraph>
        </ListItem>

        <ListItem>
          <Paragraph>{descriptionDisplayValue}</Paragraph>
          <Image width={50} height={50} alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
        </ListItem>

        <ListItem sx={{ display: { xs: "none", sm: "flex" } }}>
          <ShowerIcon />
          <Paragraph>{Math.round(item.pop * 100)}%</Paragraph>
        </ListItem>

        <ListItem sx={{ display: { xs: "none", md: "flex" } }}>
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
