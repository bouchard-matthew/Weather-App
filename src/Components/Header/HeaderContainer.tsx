import * as React from "react";
import Header from "./Header";

const HeaderContainer = () => {
  const [zip, setZip] = React.useState('');
  const inputHandler = (e: any) => {
// setZip(e.target.value);
const elem = document.querySelector('[aria-label="search"]');
elem?.setAttribute('value', e.target.value);
console.log(e.target.value);
console.log(elem);
  }

  const setValue = () => {
    const elem = document.querySelector('[aria-label="search"]');
// setZip(elem.value == null ? "" : elem.value);
console.group(elem);
  }
  return <Header handleState={setValue} handler={inputHandler}/>;
};

export default HeaderContainer;
