import { CssBaseline } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import { useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AlertNotifications } from "Components/AlertNotifications";
import { AlertPage } from "Components/AlertPage";
import { Current } from "Components/Current";
import { DailyList } from "Components/DailyList";
import { Header } from "Components/Header";
import { HourlyChart } from "Components/HourlyChart";
import { HourlyList } from "Components/HourlyList";
import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useWeather } from "Context/useWeather";
import { setLatAndLong } from "Utils/dataFunctions";

const { REACT_APP_API_KEY } = process.env;

const AppContainer = () => {
  const { lat, lon, setLat, setLon } = useAdditionalWeatherProperties();
  const { weather, setWeather } = useWeather();

  const fetchWeather = useCallback(
    async (name: string, lat: number, lon: number) => {
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${REACT_APP_API_KEY}`);
      let data = Object.assign({}, res.data, { name, expiresAt: dayjs().add(1, "day").unix() });
      setWeather(data);
    },
    [setWeather]
  );

  useEffect(() => {
    weather.map((item) => item.expiresAt < dayjs().unix() && fetchWeather(item.name, item.lat, item.lon));

    if (!lat && !lon) {
      setLatAndLong(setLat, setLon);
    }

    if (weather.length === 0 && lat && lon) {
      fetchWeather("Home", lat, lon);
    }
  }, [fetchWeather, lat, lon, setLat, setLon, weather]);

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
      </BrowserRouter>
    </>
  );
};

export default AppContainer;
