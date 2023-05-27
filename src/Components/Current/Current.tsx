import CircularProgress from "@mui/material/CircularProgress";
import dayjs from "dayjs";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ShowerIcon from "@mui/icons-material/Shower";
import CloudIcon from "@mui/icons-material/Cloud";
import AirIcon from "@mui/icons-material/Air";

import { Container, Flex, ListItem, Loading, Paragraph } from "Design";
import { useCardinality } from "Hooks/useCardinality";
import { useUnitSpeed } from "Hooks/useUnitSpeed";
import { useUnitTemperature } from "Hooks/useUnitTemperature";
import { capitalizeFirstLetter } from "Utils/stringFunctions";
import type { Props } from "./Current.types";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const Current = ({ loading, current, currentTime, timeZone }: Props) => {
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
          <Container sx={{ width: "50%" }}>
            <Flex sx={{ flexDirection: { xs: "column", sm: "row" } }} alignItems="center" textAlign="center">
              <Paragraph variant="h4">
                Current Weather
                <Paragraph>
                  {dayjs(currentTime * 1000)
                    .tz(timeZone)
                    .format("h:mm A")}
                </Paragraph>
                <Paragraph>{capitalizeFirstLetter(current.weather[0].description)}</Paragraph>
              </Paragraph>
              <img
                height="200px"
                width="200px"
                alt={capitalizeFirstLetter(current.weather[0].description)}
                src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
              />
            </Flex>

            <Flex sx={{ marginBottom: { xs: "0px", sm: "15px" }, flexDirection: { xs: "column", sm: "row" } }}>
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
                  Humidity <br /> {Math.round(current.humidity)}%
                </Paragraph>
              </ListItem>
            </Flex>
            <Flex sx={{ my: { xs: "0px", sm: "15px" }, flexDirection: { xs: "column", sm: "row" } }}>
              <ListItem>
                <WbSunnyIcon />
                <Paragraph>
                  UV Index <br /> {Math.round(current.uvi)} of 10
                </Paragraph>
              </ListItem>

              <ListItem>
                <CloudIcon />
                <Paragraph>
                  Cloud Cover <br /> {Math.round(current.clouds)}%
                </Paragraph>
              </ListItem>

              <ListItem>
                <ShowerIcon />
                <Paragraph>
                  Precip Amount <br /> {Math.round(current.pop * 100)}%
                </Paragraph>
              </ListItem>
            </Flex>
          </Container>
        )
      )}
    </>
  );
};

export default Current;
