import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { Hourly, NewHourlyObject, Units } from "Types/types";
import { useCallback, useMemo } from "react";

export const useHourlyChartData = (hourly: Hourly[]): NewHourlyObject[] => {
  const { units } = useAdditionalWeatherProperties();

  let convertTemperature = useCallback(
    (deg: number) => {
      const map = {
        [Units.imperial]: Math.round(((deg - 273.15) * 9) / 5 + 32),
        [Units.metric]: Math.round(deg - 273.15),
        [Units.standard]: Math.round(deg),
      } as const;
      return map[units];
    },
    [units]
  );

  return useMemo(() => {
    return hourly.map((item) =>
      Object.assign({}, item, {
        Humidity: Math.round(item.humidity),
        "Feels Like": convertTemperature(item.feels_like),
        Clouds: Math.round(item.clouds),
        Temperature: convertTemperature(item.temp),
        Precipitation: Math.round(item.pop * 100)
      })
    );
  }, [hourly])
};

export default useHourlyChartData;
