import { Box } from "@mui/material";
import React from "react";
import { HourlyObject } from "../../Types/types";
import { capitalizeFirstLetter } from "../Utils/stringFunctions";
import moment from "moment";
import { useStore } from "../../Context/useAppStore";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";

const HourlyList = (item: HourlyObject) => {
  const { units } = useStore();
  return (
    <>
      {moment(item.dt * 1000).format("hha") == "12am" && (
        <Box sx={{ background: "lightgrey", padding: "15px 10px", textAlign: "center" }}>{moment(item.dt * 1000).format("dddd, MMMM Do")}</Box>
      )}
      <Box sx={{ display: "flex", justifyContent: "space-evenly", border: "1px solid lightgray" }}>
        <span style={{ padding: "16px" }}>
          {new Date(item.dt * 1000).toLocaleString("en-us", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        <span style={{ padding: "16px" }}>
          {Math.round(item.temp)}° {returnUnitTemperature(units)}{" "}
        </span>
        <span style={{ padding: "16px" }}>
          {capitalizeFirstLetter(item.weather[0].description)} <img alt="something" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
        </span>
        <span style={{ padding: "16px" }}>
          <OpacityIcon />
          {item.pop * 100}%
        </span>
        <span style={{ padding: "16px" }}>
          <AirIcon /> {Math.round(item.wind_speed)} {returnUnitSpeed(units)}
        </span>
      </Box>
    </>
  );
};

const returnUnitSpeed = (unit: number): string => {
  switch (unit) {
    case 0:
      return "mph";
    default:
      return "kph";
  }
};

const returnUnitTemperature = (unit: number): string => {
  switch (unit) {
    case 0:
      return "F";
    default:
      return "C";
  }
};

export default HourlyList;
