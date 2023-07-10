import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useHourlyWeather } from "Hooks/useHourlyWeather";
import { useLocationName } from "Hooks/useLocationName";
import { useTimeZoneString } from "Hooks/useTimeZoneString";
import { useState, useEffect } from "react";
import Current from "./Current";
import { useWeather } from "Context/useWeather";

const CurrentContainer = () => {
  const [toggle, setToggle] = useState(false);
  const { weather } = useWeather();
  const { currentTime } = useAdditionalWeatherProperties();
  const [current, setCurrent] = useState(useHourlyWeather()[0]);

  const hourly = useHourlyWeather();

  useEffect(() => {
    setCurrent([...hourly][0]);
  }, [hourly, weather]);

  return <Current timeZone={useTimeZoneString()} currentTime={currentTime} toggle={toggle} setToggle={setToggle} current={current} name={useLocationName()} />;
};

export default CurrentContainer;
