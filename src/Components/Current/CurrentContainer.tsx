import { useStore } from "Context/useAppStore";
import { useCurrentWeather } from "Hooks/useCurrentWeather";
import { useLocationName } from "Hooks/useLocationName";
import Current from "./Current";

const CurrentContainer = () => {
  const { units } = useStore();

  return <Current current={useCurrentWeather()} name={useLocationName()} units={units} />;
};

export default CurrentContainer;
