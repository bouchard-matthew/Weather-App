import ClearIcon from "@mui/icons-material/Clear";
import { Toolbar, Typography } from "@mui/material";
import { Flex } from "Design";

import type { Props } from "./SecondToolbar.types";

const SecondToolbar = ({ weatherArray, handleClick, deleteAtIndex }: Props) => {
  return (
    <Toolbar sx={{ backgroundColor: "#6495ED" }}>
      <Flex flexDirection={{ xs: "column", sm: "column", md: "row" }} sx={{ "& > div:nth-child(1) > svg": { opacity: "0 !important" } }}>
        {weatherArray.map((item, idx) => {
          return (
            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "center",
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
              key={idx}
            >
              <img
                alt={`${item.current.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.current.weather[0].icon}.png`}
                onClick={() => handleClick(item.lat, item.lon)}
              />
              <Typography noWrap component="span" onClick={() => handleClick(item.lat, item.lon)}>
                {item.name}
              </Typography>
              {<ClearIcon sx={{ "&:hover": { color: "red" } }} onClick={() => deleteAtIndex(idx)} />}
            </Flex>
          );
        })}
      </Flex>
    </Toolbar>
  );
};

export default SecondToolbar;
