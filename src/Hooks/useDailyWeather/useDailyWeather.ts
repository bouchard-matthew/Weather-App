import { useStore } from "Context/useAppStore";
const useDailyWeather = () => {
  const { weather } = useStore();
  return weather?.daily;
};

export default useDailyWeather;
