import React from "react";
import { Box, Typography } from "@mui/material";
import { Props } from "./Current.types";
import dayjs from "dayjs";
import { capitalizeFirstLetter } from "Utils/stringFunctions";

const Current = ({ current, name }: Props) => {
  return (
    <>
      {current && (
        <Box sx={{ textAlign: "center" }}>
          <Typography>
            <b>{name}</b> As of {dayjs(current.dt * 1000).format("hh:mm A")}
          </Typography>
          <Typography variant="h3">{Math.round(current.temp)}°</Typography>
          <Typography variant="h4">{capitalizeFirstLetter(current.weather[0].description)}</Typography>
          <Typography variant="h4">
            Day {} • Night {}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Current;
