import SecondToolbar from "./SecondToolbar";
import { useEffect } from "react";
import { useStore } from "Context/useAppStore";

const SecondToolbarContainer = () => {
  const { weatherArray, setWeather, deleteAtIndex } = useStore();

  const updateWeatherLS = (index: number) => {
    let weather = [...weatherArray].filter((_, idx) => idx !== index);
    deleteAtIndex(index);
    localStorage.setItem("weatherData", JSON.stringify(weather));
  };

  useEffect(() => {}, [weatherArray]);
  return <SecondToolbar weatherArray={weatherArray} setWeather={setWeather} deleteAtIndex={updateWeatherLS} />;
};

export default SecondToolbarContainer;
