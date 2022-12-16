import { useStore } from "Context/useAppStore";

const useHourlyWeather = () => {
  const { weather } = useStore();
  return weather?.hourly;
};

export default useHourlyWeather;
