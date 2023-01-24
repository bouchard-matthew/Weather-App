import { useStore } from "Context/useAppStore";
import { useCurrentWeather } from "Hooks/useCurrentWeather";
import { useLocationName } from "Hooks/useLocationName";
import { useToday } from "Hooks/useToday";
import { useState } from "react";
import Current from "./Current";

const CurrentContainer = () => {
  const [toggle, setToggle] = useState(false);
  const { units } = useStore();

  return <Current toggle={toggle} setToggle={setToggle} today={useToday()} current={useCurrentWeather()} name={useLocationName()} units={units} />;
};

export default CurrentContainer;
