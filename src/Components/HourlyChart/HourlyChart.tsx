import React from "react";
import { useStore } from "../../Context/useAppStore";
import { LineChart, XAxis, Line, Tooltip, YAxis, Legend, ResponsiveContainer } from "recharts";
import { prepareHourlyForRendering } from "../Utils/dataFunctions";
import { Box } from "@mui/material";

const HourlyContainer = () => {
  const { hourly } = useStore();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ResponsiveContainer width="90%" height={400}>
        <LineChart data={prepareHourlyForRendering(hourly)} margin={{ top: 35, right: 60, left: 0, bottom: 35 }}>
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
          <Line type="monotone" dataKey="Temperature" stroke="red" yAxisId={0} />
          <Line type="monotone" dataKey="Feels Like" stroke="#ff7313" yAxisId={0} />
          <Line type="monotone" dataKey="Humidity" stroke="green" yAxisId={0} />
          <Line type="monotone" dataKey="Clouds" stroke="grey" yAxisId={0} />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default HourlyContainer;
