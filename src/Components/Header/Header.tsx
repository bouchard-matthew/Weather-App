import React from "react";
import { NavLink } from "react-router-dom";
require("./Header.css");

const Header = () => {
  return (
    <>
    <div className={"weather"}>
      something
    </div>
      <nav className={"navigation"}>
        <ul className={"listItems"}>
          <li>
            <NavLink to="/">Today</NavLink>
          </li>
          <li>
            <NavLink to="weekly">Weekly</NavLink>
          </li>
          <li>
            <NavLink to="hourly">Hourly</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
