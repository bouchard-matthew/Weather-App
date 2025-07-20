import ClearIcon from "@mui/icons-material/Clear";
import { Toolbar, Box } from "@mui/material";
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
            const currentItem = item.hourly?.find(
              (hourlyItem) =>
                hourlyItem.dt ===
                dayjs(currentTime * 1000)
                  .startOf("hour")
                  .unix()
            );

            // Provide fallbacks for potentially undefined values
            const weatherDescription = currentItem?.weather?.[0]?.description || 'weather';
            const weatherIcon = currentItem?.weather?.[0]?.icon || '01d'; // default sunny icon

            return (
              <Box
                key={`${item.lat}-${item.lon}-${idx}`} // More stable key
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
                    alt={weatherDescription}
                    src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
                    onError={(e) => {
                      // Fallback for broken images
                      e.currentTarget.src = `http://openweathermap.org/img/wn/01d.png`;
                    }}
                  />
                  {item.name}
                  {idx !== 0 && ( // Only show clear icon if not the first item
                    <ClearIcon
                      onClick={(e: any) => {
                        e.stopPropagation();
                        // Add bounds checking
                        if (idx > 0 && weatherArray[idx - 1]) {
                          setLat(weatherArray[idx - 1].lat);
                          setLon(weatherArray[idx - 1].lon);
                        }
                        deleteAtIndex(idx);
                      }}
                    />
                  )}
                </Flex>
              </Box>
            );
          })}
      </Flex>
    </Toolbar>
  );
};

export default SecondToolbar;