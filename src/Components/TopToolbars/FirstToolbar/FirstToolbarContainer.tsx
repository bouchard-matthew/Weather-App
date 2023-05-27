import axios from "axios";
import { useState, useCallback } from "react";
import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import FirstToolbar from "./FirstToolbar";
import { useWeather } from "Context/useWeather";

const FirstToolbarContainer = () => {
  const { setUnits, units } = useAdditionalWeatherProperties();
  const { setWeather } = useWeather();
  const [zip, setZip] = useState<string>("");

  const fetchWeatherDataUsingZip = useCallback(async () => setWeather((await axios.get(`/api/fetchWeatherUsingZip?zip=${zip}`)).data), [setWeather, zip]);

  const callFetchWeather = useCallback(() => zip !== "" && fetchWeatherDataUsingZip(), [fetchWeatherDataUsingZip, zip]);

  return <FirstToolbar fetchWeather={callFetchWeather} units={units} setUnits={setUnits} setZip={setZip} />;
};

export default FirstToolbarContainer;
