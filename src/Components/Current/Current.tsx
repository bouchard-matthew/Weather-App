import CircularProgress from "@mui/material/CircularProgress";
import dayjs from "dayjs";
import { Flex, Loading, Paragraph } from "Design";
import { useCardinality } from "Hooks/useCardinality";
import { useUnitSpeed } from "Hooks/useUnitSpeed";
import { useUnitTemperature } from "Hooks/useUnitTemperature";
import { capitalizeFirstLetter } from "Utils/stringFunctions";
import type { Props } from "./Current.types";

const Current = ({ loading, toggle, setToggle, current, name }: Props) => {
  const temperatureDisplayValue = useUnitTemperature(current?.feels_like || 0);
  const windSpeedDisplayValue = useUnitSpeed(current?.wind_speed || 0);
  const cardinalityDisplayValue = useCardinality(current?.wind_deg || 0);

  return (
    <>
      {loading ? (
        <Loading>
          <CircularProgress />
        </Loading>
      ) : (
        current && (
          <Flex border="1px solid black" py={3} sx={{ width: "50%" }} flexDirection="column" m={"auto"}>
            <Paragraph variant="h4">
              Current Weather<Paragraph>{dayjs(current.dt * 1000).format("h:MM A")}</Paragraph>
            </Paragraph>
            <Flex>
              <Flex>
                <img alt={current.weather[0].description} src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`} />
                <Flex flexDirection="column">
                  <Paragraph>{temperatureDisplayValue}</Paragraph>
                  <Paragraph>{capitalizeFirstLetter(current.weather[0].description)}</Paragraph>
                </Flex>
              </Flex>
              <Flex flexDirection="column">
                <Paragraph>
                  Wind | {cardinalityDisplayValue} {windSpeedDisplayValue}
                </Paragraph>
                <Paragraph>Humidity | {current.humidity}%</Paragraph>
                <Paragraph>Cloud Coverage | {current.clouds}%</Paragraph>
                <Paragraph>UVI | {Math.round(current.uvi)} / 10</Paragraph>
                <Paragraph>Pressure | {current.pressure} hPa</Paragraph>
              </Flex>
            </Flex>
          </Flex>
        )
      )}
    </>
  );
};

export default Current;
