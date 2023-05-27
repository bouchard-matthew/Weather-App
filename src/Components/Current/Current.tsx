import AirIcon from "@mui/icons-material/Air";
import CloudIcon from "@mui/icons-material/Cloud";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import ShowerIcon from "@mui/icons-material/Shower";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { Container, ListItem, Paragraph, ResponsiveFlex } from "Design";
import { useCardinality } from "Hooks/useCardinality";
import { useUnitSpeed } from "Hooks/useUnitSpeed";
import { useUnitTemperature } from "Hooks/useUnitTemperature";

import type { Props } from "./Current.types";
import Image from "next/image";
import { useCapitalizeFirstLetter } from "Hooks/useCapitalizeFirstLetter";

dayjs.extend(utc);
dayjs.extend(timezone);

const Current = ({ current, currentTime, timeZone }: Props) => {
  const temperatureDisplayValue = useUnitTemperature(current?.feels_like || 0);
  const windSpeedDisplayValue = useUnitSpeed(current?.wind_speed || 0);
  const cardinalityDisplayValue = useCardinality(current?.wind_deg || 0);
  const descriptionDisplayValue = useCapitalizeFirstLetter(current?.weather[0].description || "");

  return (
    <>
      {current && (
        <Container>
          <ResponsiveFlex>
            <Paragraph variant="h4">
              Current Weather
              <Paragraph>
                {dayjs(currentTime * 1000)
                  .tz(timeZone)
                  .format("h:mm A")}
              </Paragraph>
              <Paragraph>{descriptionDisplayValue}</Paragraph>
            </Paragraph>
            <Image
              height={200}
              width={200}
              priority={true}
              alt={descriptionDisplayValue}
              src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
            />
          </ResponsiveFlex>

          <ResponsiveFlex>
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
          </ResponsiveFlex>
          <ResponsiveFlex>
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
          </ResponsiveFlex>
        </Container>
      )}
    </>
  );
};

export default Current;
