import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={style.menu_block}>
      <NavLink to="/maze" activeClassName={style.activeLink}>
        <b>Maze</b>
      </NavLink>
      <NavLink to="/ratecurrency" activeClassName={style.activeLink}>
        <b>RateCurrency</b>
      </NavLink>
    </div>
  );
};

export default Menu;
