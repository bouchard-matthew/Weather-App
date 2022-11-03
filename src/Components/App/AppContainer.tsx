import axios from "axios";
import React, { useEffect } from "react";
import { useStore } from "../../Context/useAppStore";
import App from "./App";
const { REACT_APP_API_KEY } = process.env;

const AppContainer = () => {
  const { lat, long, setLat, setLong, units } = useStore();

  useEffect(() => {
    if (lat !== undefined && long !== undefined) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${REACT_APP_API_KEY}&units=${units}`
        )
        .then((response) => console.dir(response.data));
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

  console.log("Matthew's Test");

  return <App />;
};

export default AppContainer;
