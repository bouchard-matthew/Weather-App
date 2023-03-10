import { useCallback, useEffect } from "react";
import { useStore } from "Context/useAppStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "Components/Header";
import { Current } from "Components/Current";
import { HourlyChart } from "Components/HourlyChart";
import { DailyList } from "Components/DailyList";
import { Footer } from "Components/Footer";
import { HourlyList } from "Components/HourlyList";
import { CssBaseline } from "@mui/material";
import axios from "axios";
import { setLatAndLong } from "Utils/dataFunctions";
import { AlertPage } from "Components/AlertPage";
import { AlertNotifications } from "Components/AlertNotifications";

const { REACT_APP_API_KEY } = process.env;

const AppContainer = () => {
  const { lat, lon, setLat, setLon, weather, setWeather } = useStore();

  const fetchWeather = useCallback(async () => {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${REACT_APP_API_KEY}`);
    let data = Object.assign({}, res.data, { name: "Home" });
    setWeather(data);
  }, [lat, lon, setWeather]);

  useEffect(() => {
    // To-Do: Check expiresAt for the specific weather object AND if current time exceeds, then filter out expired weather objects. Re-fetch?

    if (!lat && !lon) {
      setLatAndLong(setLat, setLon);
    }

    if (weather.length === 0) {
      fetchWeather();
    }
  }, [fetchWeather, lat, lon, setLat, setLon, weather.length]);

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AlertNotifications />
                <Current />
              </>
            }
          />
          <Route path={"/alerts"} element={<AlertPage />} />
          <Route
            path="/daily"
            element={
              <>
                <AlertNotifications />
                <DailyList />
              </>
            }
          />
          <Route
            path="/hourly"
            element={
              <>
                <AlertNotifications />
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
