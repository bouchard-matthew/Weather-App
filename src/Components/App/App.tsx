import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AlertNotifications } from "Components/AlertNotifications";
import { AlertPage } from "Components/AlertPage";
import { Current } from "Components/Current";
import { DailyList } from "Components/DailyList";
import { Header } from "Components/Header";
import { HourlyChart } from "Components/HourlyChart";
import { HourlyList } from "Components/HourlyList";
import { useCurrentTime } from "Hooks/useCurrentTime";
import { useFetchWeather } from "Hooks/useFetchWeather";

const AppContainer = () => {
  useCurrentTime();
  useFetchWeather();

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
