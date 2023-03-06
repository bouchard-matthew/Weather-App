import { useStore } from "Context/useAppStore";
import SecondToolbar from "./SecondToolbar";

const SecondToolbarContainer = () => {
  const { weather, deleteAtIndex, setLat, setLon } = useStore();

  const handleDelete = (index: number) => {
    setLat(weather[index - 1].lat);
    setLon(weather[index - 1].lon);
    deleteAtIndex(index);
  };

  const setAppLatLong = (latitude: number, longitude: number) => {
    setLat(latitude);
    setLon(longitude);
  };

  return <SecondToolbar weatherArray={weather} handleClick={setAppLatLong} deleteAtIndex={handleDelete} />;
};

export default SecondToolbarContainer;
