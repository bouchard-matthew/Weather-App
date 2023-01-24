import { useEffect } from "react";
import { useStore } from "Context/useAppStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "Components/Header";
import { Alert } from "Components/Alert";
import { Current } from "Components/Current";
import { HourlyChart } from "Components/HourlyChart";
import { DailyList } from "Components/DailyList";
import { Footer } from "Components/Footer";
import { HourlyList } from "Components/HourlyList";
import { CssBaseline } from "@mui/material";
import axios from "axios";
import { setLatAndLong } from "Utils/dataFunctions";

const { REACT_APP_API_KEY } = process.env;

const AppContainer = () => {
  const { lat, lon, setLat, setLon, weather, setWeather } = useStore();

  const fetchWeather = async () => {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${REACT_APP_API_KEY}`);
    let data = Object.assign({}, res.data, { name: "Home" });
    setWeather(data);
  };

  useEffect(() => {
    // Refactored Code =>
    if (!lat && !lon) {
      setLatAndLong(setLat, setLon);
    }

    if (weather.length === 0) {
      fetchWeather();
    }
  }, [lat, lon]);

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <CssBaseline />
        <Header />
        {/* To Do: Alerts needs to be conditionally rendered. Path from weather object => weather.data.alerts */}
        <Alert />
        <Routes>
          <Route path="/" element={<Current />} />
          <Route path="/daily" element={<DailyList />} />
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
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default AppContainer;
