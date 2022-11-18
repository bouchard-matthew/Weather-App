import { useState } from "react";
import Header from "./Header";

const HeaderContainer = () => {
  const [zip, setZip] = useState("");

  const setValue = (e: any) => {
    setZip(e.target.value);
    console.log(zip);
  };
  return <Header handleState={setValue} />;
};

export default HeaderContainer;
