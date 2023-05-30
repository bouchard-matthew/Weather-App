import ClearIcon from "@mui/icons-material/Clear";
import { Toolbar, Button } from "@mui/material";
import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import dayjs from "dayjs";
import { Flex } from "Design";
import Image from "next/image";

import type { Props } from "./SecondToolbar.types";

const SecondToolbar = ({ weatherArray, setLat, setLon, deleteAtIndex }: Props) => {
  const { currentTime } = useAdditionalWeatherProperties();
  return (
    <Toolbar sx={{ backgroundColor: "#6495ED" }}>
      <Flex sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        {weatherArray.length > 0 &&
          weatherArray.map((item, idx) => {
            let currentItem = item.hourly.find(
              (hourlyItem) =>
                hourlyItem.dt ===
                dayjs(currentTime * 1000)
                  .startOf("hour")
                  .unix()
            );
            return (
              <Button
                key={currentItem?.weather[0].description}
                color="inherit"
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                  "& svg": {
                    opacity: "0",
                  },
                  "&:hover svg": {
                    opacity: `${idx === 0 ? "0" : "100"}`,
                  },
                  "&:hover svg:hover": { color: "red" },
                }}
                onClick={() => {
                  setLat(item.lat);
                  setLon(item.lon);
                }}
              >
                <Flex>
                  <Image
                    width={50}
                    height={50}
                    alt={`${currentItem && currentItem.weather[0].description}`}
                    src={`http://openweathermap.org/img/wn/${currentItem && currentItem.weather[0].icon}.png`}
                  />
                  {item.name}
                  {
                    <ClearIcon
                      onClick={(e: any) => {
                        e.stopPropagation();
                        setLat(weatherArray[idx - 1].lat);
                        setLon(weatherArray[idx - 1].lon);
                        deleteAtIndex(idx);
                      }}
                    />
                  }
                </Flex>
              </Button>
            );
          })}
      </Flex>
    </Toolbar>
  );
};

export default SecondToolbar;
