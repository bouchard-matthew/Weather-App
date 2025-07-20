import AirIcon from "@mui/icons-material/Air";
import CloudIcon from "@mui/icons-material/Cloud";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import ShowerIcon from "@mui/icons-material/Shower";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Flex, ListItem, Paragraph, ResponsiveFlex } from "Design";
import { useCardinality } from "Hooks/useCardinality";
import { useUnitSpeed } from "Hooks/useUnitSpeed";
import { useUnitTemperature } from "Hooks/useUnitTemperature";

import type { Props } from "./ConditionsListItem.types";

const ConditionsListItem = ({ conditions }: Props) => {
    const temperatureDisplayValue = useUnitTemperature(conditions?.feels_like || 0);
    const windSpeedDisplayValue = useUnitSpeed(conditions?.wind_speed || 0);
    const cardinalityDisplayValue = useCardinality(conditions?.wind_deg || 0);

    return (
        <Flex sx={{ flexDirection: { xs: "row", sm: "column" } }}>
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
                        Humidity <br /> {Math.round(conditions.humidity)}%
                    </Paragraph>
                </ListItem>
            </ResponsiveFlex>
            <ResponsiveFlex>
                <ListItem>
                    <WbSunnyIcon />
                    <Paragraph>
                        UV Index <br /> {Math.round(conditions.uvi)}
                    </Paragraph>
                </ListItem>

                <ListItem>
                    <CloudIcon />
                    <Paragraph>
                        Cloud Cover <br /> {Math.round(conditions.clouds)}%
                    </Paragraph>
                </ListItem>

                <ListItem>
                    <ShowerIcon />
                    <Paragraph>
                        Rain Amount <br /> {Math.round(conditions.pop * 100)}%
                    </Paragraph>
                </ListItem>
            </ResponsiveFlex>
        </Flex>
    );
};

export default ConditionsListItem;
