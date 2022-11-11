import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
require("./Header.css");

const Header = () => {
  return (
    <>
      <div className={"main"}>
        <div>
          <p>Weather</p>
        </div>
        <div>
          <SearchIcon /> <input />
        </div>
        <div>
          <p>Option menu</p>
        </div>
      </div>
      <div className={"weather"}>
        <div>
          <img alt="img1" src="http://openweathermap.org/img/wn/10d.png" />
          <span>Rainy</span>
        </div>
        <div>
          <img alt="img2" src="http://openweathermap.org/img/wn/02d.png" />
          <span>Partly Cloudy</span>
        </div>
        <div>
          <img alt="img3" src="http://openweathermap.org/img/wn/01d.png" />
          <span>Sunny</span>
        </div>
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
