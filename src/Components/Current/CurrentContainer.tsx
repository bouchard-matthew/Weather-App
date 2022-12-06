import { useStore } from "Context/useAppStore";
import Current from "./Current";

const CurrentContainer = () => {
  const { current, weather } = useStore();

  return <Current current={current} name={weather?.name} />;
};

export default CurrentContainer;
