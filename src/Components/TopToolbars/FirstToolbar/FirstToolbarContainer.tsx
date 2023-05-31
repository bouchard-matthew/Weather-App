import axios from "axios";
import { useState, useCallback } from "react";
import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import FirstToolbar from "./FirstToolbar";
import { useWeather } from "Context/useWeather";
import { Weather } from "Types/types";

const FirstToolbarContainer = () => {
  const { setUnits, units, setLat, setLon } = useAdditionalWeatherProperties();
  const { setWeather } = useWeather();
  const [zip, setZip] = useState<string>("");

  const fetchWeatherDataUsingZip = useCallback(async () => {
    if (zip.length === 0) {
      return;
    }

    const { data } = await axios.get<Weather>(`/api/fetchWeatherUsingZip?zip=${zip}`);

    setWeather(data);
    setLat(data.lat);
    setLon(data.lon);
  }, [setLat, setLon, setWeather, zip]);

  return <FirstToolbar fetchWeather={fetchWeatherDataUsingZip} units={units} setUnits={setUnits} setZip={setZip} />;
};

export default FirstToolbarContainer;
