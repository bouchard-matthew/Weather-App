import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Today
          </NavLink>
        </li>
        <li>
          <NavLink
            to="weekly"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Weekly
          </NavLink>
        </li>
        <li>
          <NavLink to="hourly">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Hourly
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
