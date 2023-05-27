import AirIcon from "@mui/icons-material/Air";
import CloudIcon from "@mui/icons-material/Cloud";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import ShowerIcon from "@mui/icons-material/Shower";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Paragraph, ResponsiveFlex, ListItem } from "Design";
import { useCardinality } from "Hooks/useCardinality";
import { useUnitSpeed } from "Hooks/useUnitSpeed";
import { useUnitTemperature } from "Hooks/useUnitTemperature";

import type { Props } from "./HourlyListItemDetails.types";

const HourlyListItemDetails = ({ item }: Props) => {
  const cardinalityDisplayValue = useCardinality(item.wind_deg);
  const windSpeedDisplayValue = useUnitSpeed(item.wind_speed);
  const temperatureDisplayValue = useUnitTemperature(item.feels_like);

  return (
    <>
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
            Humidity <br /> {Math.round(item.humidity)}%
          </Paragraph>
        </ListItem>
      </ResponsiveFlex>

      <hr />

      <ResponsiveFlex>
        <ListItem>
          <WbSunnyIcon />
          <Paragraph>
            UV Index <br /> {Math.round(item.uvi)} of 10
          </Paragraph>
        </ListItem>

        <ListItem>
          <CloudIcon />
          <Paragraph>
            Cloud Cover <br /> {Math.round(item.clouds)}%
          </Paragraph>
        </ListItem>

        <ListItem>
          <ShowerIcon />
          <Paragraph>
            Precip Amount <br /> {Math.round(item.pop * 100)}%
          </Paragraph>
        </ListItem>
      </ResponsiveFlex>
    </>
  );
};

export default HourlyListItemDetails;
