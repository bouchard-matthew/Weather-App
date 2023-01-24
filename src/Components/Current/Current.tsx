import React from "react";
import { Box } from "@mui/material";
import { Props } from "./Current.types";
import dayjs from "dayjs";
import { capitalizeFirstLetter } from "Utils/stringFunctions";
import { returnCardinality, returnUnitSpeed, returnUnitTemperature } from "Utils/dataFunctions";
import { Flex, Paragraph } from "Design";
import { useHourlyWeather } from "Hooks/useHourlyWeather";
import Button from "@mui/material/Button";

const Current = ({ current, units, today, toggle, setToggle }: Props) => {
  let [first, second] = useHourlyWeather().filter(
    (item) => "12:00 AM" == dayjs(item.dt * 1000).format("hh:mm A") || "12:00 PM" == dayjs(item.dt * 1000).format("hh:mm A")
  );
  console.log("First: ", first);
  console.log("Second: ", second);
  return (
    <>
      {current && (
        <>
          <Flex flexDirection={"column"} textAlign={"center"} sx={{ margin: "auto", width: "65%", borderRadius: "5px", border: "1px solid black" }}>
            <Paragraph>Current Weather</Paragraph>
            <Paragraph>{dayjs(current.dt * 1000).format("hh:mm A")}</Paragraph>
            <Flex justifyContent={"center"}>
              <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt="" />
              <Box>
                <Paragraph variant="h4">{returnUnitTemperature(current.temp, units)}</Paragraph>
                <Paragraph>{capitalizeFirstLetter(current.weather[0].description)}</Paragraph>
              </Box>
            </Flex>
            {!toggle ? (
              <Button sx={{ margin: "auto", width: "fit-content", paddingX: 10 }} onClick={() => setToggle(!toggle)}>
                See More
              </Button>
            ) : (
              <>
                <Box>
                  <Flex justifyContent={"space-around"}>
                    <Paragraph>Day</Paragraph>
                    <Paragraph>{dayjs(current.dt * 1000).format("M/D")}</Paragraph>
                  </Flex>
                  <Flex justifyContent={"center"}>
                    <img src={`http://openweathermap.org/img/wn/${first.weather[0].icon}@2x.png`} alt="" />
                    <Box>
                      <Paragraph variant="h4">{returnUnitTemperature(first.temp, units)}</Paragraph>
                      <Paragraph>{capitalizeFirstLetter(first.weather[0].description)}</Paragraph>
                    </Box>
                  </Flex>
                  <Box>
                    <Flex flexDirection={"column"}>
                      <Paragraph>
                        <b>UV Index</b>
                        {Math.round(first.uvi)}
                      </Paragraph>
                      <Paragraph>
                        <b>Wind</b>
                        {returnCardinality(first.wind_deg) + " " + returnUnitSpeed(first.wind_speed, units)}
                      </Paragraph>
                      <Paragraph>
                        <b>Wind Gusts</b>
                        {returnUnitSpeed(first.wind_gust, units)}
                      </Paragraph>
                      <Paragraph>
                        <b>Probability of Precipitation</b>
                      </Paragraph>
                    </Flex>
                    <Flex flexDirection={"column"}></Flex>
                  </Box>
                </Box>
                <Box>
                  <Flex justifyContent={"space-around"}>
                    <Paragraph>Night</Paragraph>
                    <Paragraph>{dayjs(current.dt * 1000).format("M/D")}</Paragraph>
                  </Flex>
                </Box>
                <Flex justifyContent={"center"}>
                  <img src={`http://openweathermap.org/img/wn/${second.weather[0].icon}@2x.png`} alt="" />
                  <Box>
                    <Paragraph variant="h4">{returnUnitTemperature(second.temp, units)}</Paragraph>
                    <Paragraph>{capitalizeFirstLetter(second.weather[0].description)}</Paragraph>
                  </Box>
                </Flex>
                <Box>
                  <Flex flexDirection={"column"}>
                    <Paragraph>
                      <b>UV Index</b>
                      {Math.round(second.uvi)}
                    </Paragraph>
                    <Paragraph>
                      <b>Wind</b>
                      {returnCardinality(second.wind_deg) + " " + returnUnitSpeed(second.wind_speed, units)}
                    </Paragraph>
                    <Paragraph>
                      <b>Wind Gusts</b>
                      {returnUnitSpeed(second.wind_gust, units)}
                    </Paragraph>
                    <Paragraph>
                      <b>Probability of Precipitation</b>
                    </Paragraph>
                  </Flex>
                  <Flex flexDirection={"column"}></Flex>
                </Box>
                <Button onClick={() => setToggle(!toggle)}>See Less</Button>
              </>
            )}
          </Flex>
        </>
      )}
    </>
  );
};

export default Current;
