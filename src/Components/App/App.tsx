import axios from "axios";
import { useEffect } from "react";
import { useStore } from "../../Context/useAppStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../Header";
import { Alert } from "../Alert";
import { Current } from "../Current";
import { HourlyChart } from "../HourlyChart";
import { Weekly } from "../Weekly";
import { Footer } from "../Footer";
import { Units } from "../../Types/types";
import { HourlyList } from "../HourlyList";

const { REACT_APP_API_KEY } = process.env;

const AppContainer = () => {
  const { lat, long, setLat, setLong, units } = useStore();

  const fetchWeatherData = async () => {
    let weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${REACT_APP_API_KEY}&units=${Units[`${units}`]}`
    );

    console.dir(weather.data);
  };

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
      <BrowserRouter>
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
