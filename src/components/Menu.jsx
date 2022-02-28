import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
function Menu({ menu }) {
  return (
    <div className={`menu ${menu && "menu-enable"}`}>
      <div className={`menu-ripple ${menu && "menu-ripple-enable"}`}></div>
      <div className="menu-wrapper">
        <ul>
          <li>
            <Link to="/catalog/woman">Women</Link>
          </li>
          <li>
            <Link to="/catalog/men">Men</Link>{" "}
            <Link to="/catalog/kids">Kids</Link>
          </li>
          <li>
            <Link to="/stories">Stories</Link> <a href="#sale">Sale</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
