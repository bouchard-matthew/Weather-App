import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useWeather } from "Context/useWeather";
import SecondToolbar from "./SecondToolbar";
import { ClientGate } from "Components/ClientGate";

const SecondToolbarContainer = () => {
  const { setLat, setLon } = useAdditionalWeatherProperties();
  const { deleteAtIndex, weather } = useWeather();

  return (
    <ClientGate>
      <SecondToolbar weatherArray={weather} setLat={setLat} setLon={setLon} deleteAtIndex={deleteAtIndex} />
    </ClientGate>
  );
};

export default SecondToolbarContainer;
