import { useStore } from "Context/useAppStore";
import { Weather } from "Types/types";

const useLocationName = () => {
  const { weather, lat, lon } = useStore();
  return weather.find((item: Weather) => item.lat === lat && item.lon === lon)?.name;
};

export default useLocationName;
