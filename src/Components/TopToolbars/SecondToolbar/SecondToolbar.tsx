import ClearIcon from "@mui/icons-material/Clear";
import { Toolbar, Button } from "@mui/material";
import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import dayjs from "dayjs";
import { Flex } from "Design";

import type { Props } from "./SecondToolbar.types";

const SecondToolbar = ({ weatherArray, setLat, setLon, deleteAtIndex }: Props) => {
  const { currentTime } = useAdditionalWeatherProperties();
  return (
    <Toolbar sx={{ backgroundColor: "#6495ED" }}>
      <Flex flexDirection={{ xs: "column", sm: "row" }}>
        {weatherArray.map((item, idx) => {
          let currentItem = item.hourly.find(
            (hourlyItem) =>
              hourlyItem.dt ===
              dayjs(currentTime * 1000)
                .startOf("hour")
                .unix()
          );
          return (
            <Button
              key={idx}
              color="inherit"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
                "& svg": {
                  opacity: "0",
                },
                "&:hover svg": {
                  opacity: "100",
                },
              }}
              onClick={() => {
                setLat(item.lat);
                setLon(item.lon);
              }}
            >
              <Flex alignItems="center">
                <img
                  alt={`${currentItem && currentItem.weather[0].description}`}
                  src={`http://openweathermap.org/img/wn/${currentItem && currentItem.weather[0].icon}.png`}
                />
                {item.name}
                {idx !== 0 && (
                  <ClearIcon
                    sx={{ "&:hover": { color: "red" } }}
                    onClick={(e: any) => {
                      e.stopPropagation();
                      setLat(weatherArray[idx - 1].lat);
                      setLon(weatherArray[idx - 1].lon);
                      deleteAtIndex(idx);
                    }}
                  />
                )}
              </Flex>
            </Button>
          );
        })}
      </Flex>
    </Toolbar>
  );
};

export default SecondToolbar;
