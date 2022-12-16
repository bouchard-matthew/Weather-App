import { useStore } from "Context/useAppStore";

const useCurrentWeather = () => {
  const { weather } = useStore();
  return weather?.current;
};

export default useCurrentWeather;
