import { useEffect } from "react";
import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import dayjs from "dayjs";

const useCurrentTime = () => {
  const { setCurrentTime } = useAdditionalWeatherProperties();

  return useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().unix());
    }, 60000 * 5);

    return () => clearInterval(interval);
  }, [setCurrentTime]);
};

export default useCurrentTime;
