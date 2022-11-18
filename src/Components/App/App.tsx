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

const AppContainer = () => {
  const { lat, long, setLat, setLong, units } = useStore();

  useEffect(() => {
    if (lat !== undefined && long !== undefined) {
      // fetchWeatherData();
    } else {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        function (error) {
          console.log(error);
        },
        {
          maximumAge: 60000,
          timeout: 5000,
          enableHighAccuracy: true,
        }
      );
    }
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
