import SecondToolbar from "./SecondToolbar";
import { useEffect } from "react";
import { useStore } from "Context/useAppStore";

const SecondToolbarContainer = () => {
  const { weather, deleteAtIndex, setLat, setLon } = useStore();

  const handleDelete = (index: number) => {
    setLat(weather[index - 1].lat);
    setLon(weather[index - 1].lon);
    deleteAtIndex(index);
  };

  const setLocationData = (latitude: number, longitude: number) => {
    setLat(latitude);
    setLon(longitude);
  };

  useEffect(() => {}, [weather]);
  return <SecondToolbar weatherArray={weather} handleClick={setLocationData} deleteWeather={handleDelete} />;
};

export default SecondToolbarContainer;
