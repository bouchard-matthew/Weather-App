import { useMemo } from "react";
import { useStore } from "Context/useAppStore";
import { Units } from "Types/types";

interface Item {
  wind_speed: number;
}

const useUnitSpeed = (item: Item) => {
  const { units } = useStore();
  const speed = item.wind_speed;

  return useMemo(() => {
    if (units === Units.imperial) return `${Math.round(speed * 2.2369)} mph`;
    else return `${Math.round((speed * 18) / 5)} kph`;
  }, [speed, units]);
};

export default useUnitSpeed;
