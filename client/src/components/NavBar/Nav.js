import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div id="nav-component">
      <div id="nav-title">
        <h1>Rec-E-Peasy</h1>
      </div>
      <ul id="nav-bar">
        <li className="nav-tab">
          <a href="/your-recipes">Your Recipes</a>
        </li>
        <li className="nav-tab">
          <a href="/cooking-log">Cooking Log</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
