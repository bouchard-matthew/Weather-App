import { returnMoonPhase, returnUnitTemperature } from "Utils/dataFunctions";
import { Props } from "./DailyListItemDetails.types";
import { Flex, Paragraph } from "Design";
import { Box } from "@mui/material";
import dayjs from "dayjs";

const DailyListItemDetails = ({ item, units }: Props) => {
  return (
    <>
      <Flex sx={{ width: "100%", justifyContent: "space-evenly" }}>
        <Box
          sx={{
            "& p": {
              textAlign: "center",
            },
            "& img": {
              margin: "auto",
            },
            width: "50%",
            textAlign: "center",
          }}
        >
          <img alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
          <Paragraph>{dayjs(item.dt * 1000).format("ddd D")} | Day</Paragraph>
          <Paragraph>{returnUnitTemperature(item.temp.day, units)}</Paragraph>
          <br />
          <Paragraph>Sunrise at {dayjs(item.sunrise * 1000).format("h:mm A")}</Paragraph>
          <Paragraph>Sunset at {dayjs(item.sunset * 1000).format("h:mm A")}</Paragraph>
          <Paragraph>
            UV Index | <sup>{Math.round(item.uvi)}</sup>&frasl;<sub>10</sub>
          </Paragraph>
        </Box>
        <hr />
        <Box
          sx={{
            "& p": {
              textAlign: "center",
            },
            "& img": {
              margin: "auto",
            },
            width: "50%",
            textAlign: "center",
          }}
        >
          <img alt="" src="http://openweathermap.org/img/wn/01n@2x.png" />
          <Paragraph>{dayjs(item.dt * 1000).format("ddd D")} | Night</Paragraph>
          <Paragraph>{returnUnitTemperature(item.temp.night, units)}</Paragraph>
          <br />
          <Paragraph>Moonrise at {dayjs(item.moonrise * 1000).format("h:mm A")}</Paragraph>
          <Paragraph>Moonset at {dayjs(item.moonset * 1000).format("h:mm A")}</Paragraph>
          <Paragraph>Moon Phase | {returnMoonPhase(item.moon_phase)}</Paragraph>
        </Box>
      </Flex>
    </>
  );
};

export default DailyListItemDetails;
