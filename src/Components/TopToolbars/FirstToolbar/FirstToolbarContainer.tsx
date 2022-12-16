import FirstToolbar from "./FirstToolbar";
import { useState, useEffect } from "react";
import { useStore } from "Context/useAppStore";
import axios from "axios";

const { REACT_APP_API_KEY } = process.env;

let defaultVal: string = "";

const FirstToolbarContainer = () => {
  const { setLon, setLat, setUnits, units, setWeather } = useStore();
  const [zip, setZip] = useState<string>(defaultVal);

  const setValue = () => {
    setZip(defaultVal);
  };

  const setElementValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    defaultVal = e.target.value;
  };

  const fetchWeatherDataZip = async () => {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${REACT_APP_API_KEY}`);

    setLat(res.data.coord.lat);
    setLon(res.data.coord.lon);

    let res2 = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&exclude=minutely&appid=${REACT_APP_API_KEY}`
    );

    setWeather(Object.assign({}, res2.data, { name: res.data.name }));
  };

  useEffect(() => {
    if (zip !== "") {
      fetchWeatherDataZip();
    }
  }, [zip]);

  return <FirstToolbar handleState={setValue} handler={setElementValue} units={units} setUnits={setUnits} />;
};

export default FirstToolbarContainer;
