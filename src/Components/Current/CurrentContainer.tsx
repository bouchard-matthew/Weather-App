import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useCurrentWeather } from "Hooks/useCurrentWeather";
import { useLocationName } from "Hooks/useLocationName";
import { useState } from "react";
import Current from "./Current";

const CurrentContainer = () => {
  const [toggle, setToggle] = useState(false);
  const { loading } = useAdditionalWeatherProperties();

  return <Current loading={loading} toggle={toggle} setToggle={setToggle} current={useCurrentWeather()} name={useLocationName()} />;
};

export default CurrentContainer;
