import { LineChart, XAxis, Line, Tooltip, YAxis, Legend, ResponsiveContainer } from "recharts";
import { returnHourlyChartData } from "Utils/dataFunctions";
import { Box, Button } from "@mui/material";
import { Current, Units } from "Types/types";

interface Props {
  hourly: Current[];
  toggle: Boolean;
  units: Units;
  handleClick: (value: Boolean) => void;
}

const HourlyChart = ({ hourly, toggle, handleClick, units }: Props) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ResponsiveContainer width="90%" height={400}>
          <LineChart data={returnHourlyChartData(hourly, units)} margin={{ top: 35, right: 60, left: 0, bottom: 35 }}>
            <XAxis
              dataKey={(dt) =>
                new Date(dt.dt * 1000).toLocaleString("en-us", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }
            />
            <Tooltip />
            <YAxis type="number" />
            {toggle ? (
              <>
                <Line type="monotone" dataKey="Humidity" stroke="green" yAxisId={0} />
                <Line type="monotone" dataKey="Clouds" stroke="grey" yAxisId={0} />
                <Line type="monotone" dataKey="Precipitation" stroke="blue" yAxisId={0} />
              </>
            ) : (
              <>
                <Line type="monotone" dataKey="Temperature" stroke="red" yAxisId={0} />
                <Line type="monotone" dataKey="Feels Like" stroke="#ff7313" yAxisId={0} />
              </>
            )}
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </Box>
      <Box sx={{ textAlign: "center", "& *": { margin: "15px 10px" } }}>
        <Button onClick={() => handleClick(false)} variant={toggle ? "outlined" : "contained"}>
          Temperature
        </Button>
        <Button onClick={() => handleClick(true)} variant={toggle ? "contained" : "outlined"}>
          Conditions
        </Button>
      </Box>
    </>
  );
};

export default HourlyChart;
