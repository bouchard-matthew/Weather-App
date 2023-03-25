import { LineChart, XAxis, Line, Tooltip, YAxis, Legend, ResponsiveContainer } from "recharts";
import { returnHourlyChartData } from "Utils/dataFunctions";
import { Box, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Flex, Loading } from "Design";
import dayjs from "dayjs";

import type { Props } from "./HourlyChart.types";
import { Units } from "Types/types";

const HourlyChart = ({ hourly, toggle, handleClick, units, loading }: Props) => {
  const returnBaseUnit = (units: Units) => {
    if (units === Units.imperial) return "° F";
    else if (units === Units.metric) return "° C";
    else return "° K";
  };
  return (
    <>
      {loading ? (
        <Loading>
          <CircularProgress />
        </Loading>
      ) : (
        <>
          <Flex
            justifyContent={"center"}
            sx={{ "& > div > div > div.recharts-tooltip-wrapper": { width: "fit-content !important" }, "& > div > div > div": { width: "100% !important" } }}
          >
            <ResponsiveContainer width="80%" height={400}>
              <LineChart data={returnHourlyChartData(hourly, units)} margin={{ top: 35, right: 60, left: 0, bottom: 35 }}>
                <XAxis dataKey={(dt) => dayjs(dt.dt * 1000).format("h:mm A")} />
                <Tooltip />
                <YAxis
                  label={{ value: `${toggle ? "Percentage Chance" : "Degrees"}`, position: "insideBottom", angle: -90, dy: -130, dx: -10 }}
                  type="number"
                />
                {toggle ? (
                  <>
                    <Line unit="%" type="monotone" dataKey="Humidity" stroke="green" yAxisId={0} dot={false} />
                    <Line unit="%" type="monotone" dataKey="Clouds" stroke="grey" yAxisId={0} dot={false} />
                    <Line unit="%" type="monotone" dataKey="Precipitation" stroke="blue" yAxisId={0} dot={false} />
                  </>
                ) : (
                  <>
                    <Line unit={returnBaseUnit(units)} type="monotone" dataKey="Temperature" stroke="red" yAxisId={0} dot={false} />
                    <Line unit={returnBaseUnit(units)} type="monotone" dataKey="Feels Like" stroke="#ff7313" yAxisId={0} dot={false} />
                  </>
                )}
                <Legend align={"center"} />
              </LineChart>
            </ResponsiveContainer>
          </Flex>
          <Box sx={{ textAlign: "center", "& *": { margin: "15px 10px" } }}>
            <Button onClick={() => handleClick(false)} variant={toggle ? "outlined" : "contained"}>
              Temperature
            </Button>
            <Button onClick={() => handleClick(true)} variant={toggle ? "contained" : "outlined"}>
              Conditions
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default HourlyChart;
