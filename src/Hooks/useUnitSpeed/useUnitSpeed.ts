import { useMemo } from "react";
import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { Units } from "Types/types";

const useUnitSpeed = (wind_speed: number) => {
  const { units } = useAdditionalWeatherProperties();
  const speed = wind_speed;

  return useMemo(() => {
    const map = {
      [Units.imperial]: `${Math.round(speed * 2.2369)} mph`,
      [Units.metric]: `${Math.round((speed * 18) / 5)} kph`,
      [Units.standard]: `${Math.round((speed * 18) / 5)} kph`,
    } as const;
    return map[units];
  }, [speed, units]);
};

export default useUnitSpeed;
