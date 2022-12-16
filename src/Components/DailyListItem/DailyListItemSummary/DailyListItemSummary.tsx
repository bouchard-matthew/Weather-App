import { Flex, ListItem, Paragraph } from "Design";
import { capitalizeFirstLetter } from "Utils/stringFunctions";
import { returnUnitSpeed, returnCardinality, returnUnitTemperature } from "Utils/dataFunctions";
import { Props } from "./DailyListItemSummary.types";

import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import dayjs from "dayjs";

const DailyListItemSummary = ({ item, units, index }: Props) => {
  return (
    <>
      <Flex sx={{ width: "100%", justifyContent: "space-evenly" }}>
        <ListItem>
          <Paragraph>{index === 0 ? "Today" : dayjs(item.dt * 1000).format("ddd D")}</Paragraph>
        </ListItem>

        <ListItem>
          <Paragraph>
            {returnUnitTemperature(item.temp.day, units)}° / {returnUnitTemperature(item.temp.night, units)}
          </Paragraph>
        </ListItem>

        <ListItem>
          <img alt={item.weather[0].description} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
          <Paragraph sx={{ margin: "auto 0" }}>{capitalizeFirstLetter(item.weather[0].description)}</Paragraph>
        </ListItem>

        <ListItem>
          <OpacityIcon style={{ color: "blue" }} />
          <Paragraph>{item.pop * 100}%</Paragraph>
        </ListItem>

        <ListItem>
          <AirIcon style={{ color: "blue" }} />
          <Paragraph>
            {returnCardinality(item.wind_deg)} {returnUnitSpeed(item.wind_speed, units)}
          </Paragraph>
        </ListItem>
      </Flex>
    </>
  );
};

export default DailyListItemSummary;
