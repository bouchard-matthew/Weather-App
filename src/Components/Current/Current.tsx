import React from "react";
import { Box, Typography } from "@mui/material";
import { Props } from "./Current.types";
import dayjs from "dayjs";
import { capitalizeFirstLetter } from "Utils/stringFunctions";
import { returnUnitTemperature } from "Utils/dataFunctions";

const Current = ({ current, name, units }: Props) => {
  return (
    <>
      {current && (
        <Box sx={{ textAlign: "center" }}>
          <Typography>
            <b>{name}</b> As of {dayjs(current.dt * 1000).format("hh:mm A")}
          </Typography>
          <Typography variant="h3">{returnUnitTemperature(current.temp, units)}</Typography>
          <Typography variant="h4">{capitalizeFirstLetter(current.weather[0].description)}</Typography>
        </Box>
      )}
    </>
  );
};

export default Current;
