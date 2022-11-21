import FirstToolbar from "./FirstToolbar";
import { useState, useEffect } from "react";
import { useStore } from "Context/useAppStore";
import axios from "axios";

const { REACT_APP_API_KEY } = process.env;

let defaultVal: string = "";

const FirstToolbarContainer = () => {
  const { lat, long, setLong, setLat, setUnits, units, setWeather } = useStore();
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
    setLong(res.data.coord.lon);

    fetchOneCall(res.data.name, res.data.coord.lat, res.data.coord.lon);
  };

  const fetchOneCall = async (name: string, latitude: number, longitude: number) => {
    let res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${REACT_APP_API_KEY}&units=${units}`
    );

    setWeather(Object.assign({}, res.data, { name }));
  };

  useEffect(() => {
    if (zip !== "") {
      fetchWeatherDataZip();
    }
  }, [zip]);

  return <FirstToolbar handleState={setValue} handler={setElementValue} units={units} setUnits={setUnits} />;
};

export default FirstToolbarContainer;
