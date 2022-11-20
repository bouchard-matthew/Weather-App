import { useEffect } from "react";
import { useStore } from "Context/useAppStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../Header";
import { Alert } from "../Alert";
import { Current } from "../Current";
import { HourlyChart } from "../HourlyChart";
import { Weekly } from "../Weekly";
import { Footer } from "../Footer";
import { HourlyList } from "../HourlyList";
import { CssBaseline } from "@mui/material";
import axios from "axios";
import { setLatAndLong, userWeatherDataAvailable } from "Utils/dataFunctions";

const { REACT_APP_API_KEY } = process.env;

const AppContainer = () => {
  const { lat, long, setLat, setLong, units, weather, setWeather } = useStore();

  const fetchWeatherData = async (run: Boolean) => {
    if (run) {
      let weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${REACT_APP_API_KEY}&units=${units}`
      );
      localStorage.setItem("weather", JSON.stringify(weather.data));
      console.log("Weather fetched. Set in localStorage");
      setWeather(weather.data);
      return weather;
    }
    console.log("Weather previously fetched. Found in localStorage");
    setWeather(JSON.parse(localStorage.getItem("weather") || "{}"));
  };

  useEffect(() => {
    setLatAndLong(setLat, setLong);
    if (lat && long) {
      fetchWeatherData(userWeatherDataAvailable());
    }
    console.log(weather);
  }, [lat, long, units]);

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <CssBaseline />
        <Header />
        {/* To Do: Alerts needs to be conditionally rendered. Path from weather object => weather.data.alerts */}
        {/* <Alert /> */}
        <Routes>
          <Route path="/" element={<Current />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route
            path="/hourly"
            element={
              <>
                <HourlyChart />
                <HourlyList />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppContainer;
