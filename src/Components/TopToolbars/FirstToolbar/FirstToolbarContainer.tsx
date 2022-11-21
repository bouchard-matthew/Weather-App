import FirstToolbar from "./FirstToolbar";
import { useState } from "react";
import { useStore } from "Context/useAppStore";

let defaultVal: string = "";

const FirstToolbarContainer = () => {
  const { units, setUnits } = useStore();
  const [zip, setZip] = useState<string>(defaultVal);

  const setValue = () => {
    setZip(defaultVal);
  };

  const setElementValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    defaultVal = e.target.value;
  };

  return <FirstToolbar handleState={setValue} handler={setElementValue} units={units} setUnits={setUnits} />;
};

export default FirstToolbarContainer;
