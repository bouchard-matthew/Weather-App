import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { Units } from "Types/types";
import { useMemo } from "react";

const map = {
  [Units.imperial]: "° F",
  [Units.metric]: "° C",
  [Units.standard]: "° K",
} as const;

export const useBaseUnit = () => {
  const { units } = useAdditionalWeatherProperties();

  return useMemo(() => map[units], [units]);
};

export default useBaseUnit;
