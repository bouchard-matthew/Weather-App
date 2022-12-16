import SecondToolbar from "./SecondToolbar";
import { useEffect } from "react";
import { useStore } from "Context/useAppStore";

const SecondToolbarContainer = () => {
  const { weather, deleteAtIndex, setLat, setLon } = useStore();

  const updateWeatherLS = (index: number) => {
    setLat(undefined);
    setLon(undefined);
    deleteAtIndex(index);
  };

  const setLocationData = (latitude: number, longitude: number) => {
    setLat(latitude);
    setLon(longitude);
  };

  useEffect(() => {}, [weather]);
  return <SecondToolbar weatherArray={weather} handleClick={setLocationData} deleteAtIndex={updateWeatherLS} />;
};

export default SecondToolbarContainer;
