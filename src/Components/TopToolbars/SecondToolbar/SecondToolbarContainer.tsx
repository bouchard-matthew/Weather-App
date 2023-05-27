import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useWeather } from "Context/useWeather";
import SecondToolbar from "./SecondToolbar";

const SecondToolbarContainer = () => {
  const { setLat, setLon } = useAdditionalWeatherProperties();
  const { deleteAtIndex, weather } = useWeather();

  return <SecondToolbar weatherArray={weather} setLat={setLat} setLon={setLon} deleteAtIndex={deleteAtIndex} />;
};

export default SecondToolbarContainer;
