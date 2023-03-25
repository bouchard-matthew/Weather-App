import { useMemo } from "react";
import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { Units } from "Types/types";

const useUnitSpeed = (wind_speed: number) => {
  const { units } = useAdditionalWeatherProperties();
  const speed = wind_speed;

  return useMemo(() => {
    if (units === Units.imperial) return `${Math.round(speed * 2.2369)} mph`;
    else return `${Math.round((speed * 18) / 5)} kph`;
  }, [speed, units]);
};

export default useUnitSpeed;
