import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useHourlyWeather } from "Hooks/useHourlyWeather";
import { useLocationName } from "Hooks/useLocationName";
import { useTimeZoneString } from "Hooks/useTimeZoneString";
import { useState } from "react";
import Current from "./Current";

const CurrentContainer = () => {
  const [toggle, setToggle] = useState(false);
  const { currentTime } = useAdditionalWeatherProperties();

  return (
    <Current
      timeZone={useTimeZoneString()}
      currentTime={currentTime}
      toggle={toggle}
      setToggle={setToggle}
      current={useHourlyWeather()[0]}
      name={useLocationName()}
    />
  );
};

export default CurrentContainer;
