import axios from "axios";
import { useState, useCallback } from "react";
import { useStore } from "Context/useAppStore";
import FirstToolbar from "./FirstToolbar";

const { REACT_APP_API_KEY } = process.env;

const FirstToolbarContainer = () => {
  const { setLon, setLat, setUnits, units, setWeather, setLoading } = useStore();
  const [zip, setZip] = useState<string>("");

  const fetchWeatherDataUsingZip = useCallback(async () => {
    setLoading(true);
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${REACT_APP_API_KEY}`);

    setLat(res.data.coord.lat);
    setLon(res.data.coord.lon);

    let res2 = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&exclude=minutely&appid=${REACT_APP_API_KEY}`
    );

    setWeather(Object.assign({}, res2.data, { name: res.data.name }));
    setLoading(false);
  }, [setLat, setLoading, setLon, setWeather, zip]);

  const callFetchWeather = useCallback(() => {
    if (zip !== "") {
      fetchWeatherDataUsingZip();
    }
  }, [fetchWeatherDataUsingZip, zip]);

  return <FirstToolbar fetchWeather={callFetchWeather} units={units} setUnits={setUnits} setZip={setZip} />;
};

export default FirstToolbarContainer;
