import { useStore } from "Context/useAppStore";

const useLocationName = () => {
  const { weather } = useStore();
  return weather?.name;
};

export default useLocationName;
