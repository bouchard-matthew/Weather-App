import { Box } from "@mui/material";
import dayjs from "dayjs";
import { Flex, Paragraph } from "Design";
import { useCapitalizeFirstLetter } from "Hooks/useCapitalizeFirstLetter";
import { useMoonPhase } from "Hooks/useMoonPhase";
import { useUnitTemperature } from "Hooks/useUnitTemperature";

import type { Props } from "./DailyListItemDetails.types";
import Image from "next/image";

const DailyListItemDetails = ({ item }: Props) => {
  const moonPhaseDisplayValue = useMoonPhase(item);
  const daytimeTemperatureDisplayValue = useUnitTemperature(item.temp.day);
  const nightTemperatureDisplayValue = useUnitTemperature(item.temp.night);
  const descriptionDisplayValue = useCapitalizeFirstLetter(item.weather[0].description);

  return (
    <>
      <Flex flexDirection={{ xs: "column", md: "row" }}>
        <Box>
          <Image width={50} height={50} alt={descriptionDisplayValue} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
          <Paragraph>{dayjs(item.dt * 1000).format("ddd D")} | Day</Paragraph>
          <Paragraph>{daytimeTemperatureDisplayValue}</Paragraph>
          <br />
          <Paragraph>Sunrise at {dayjs(item.sunrise * 1000).format("h:mm A")}</Paragraph>
          <Paragraph>Sunset at {dayjs(item.sunset * 1000).format("h:mm A")}</Paragraph>
          <Paragraph>
            UV Index | <sup>{Math.round(item.uvi)}</sup>&frasl;<sub>10</sub>
          </Paragraph>
        </Box>
        <hr />
        <Box>
          <Image width={50} height={50} alt={descriptionDisplayValue} src="http://openweathermap.org/img/wn/01n@2x.png" />
          <Paragraph>{dayjs(item.dt * 1000).format("ddd D")} | Night</Paragraph>
          <Paragraph>{nightTemperatureDisplayValue}</Paragraph>
          <br />
          <Paragraph>Moonrise at {dayjs(item.moonrise * 1000).format("h:mm A")}</Paragraph>
          <Paragraph>Moonset at {dayjs(item.moonset * 1000).format("h:mm A")}</Paragraph>
          <Paragraph>Moon Phase | {moonPhaseDisplayValue}</Paragraph>
        </Box>
      </Flex>
    </>
  );
};

export default DailyListItemDetails;
