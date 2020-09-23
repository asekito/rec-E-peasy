import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div id="nav-component">
      <div id="nav-title">
        <h1>Rec-E-Peasy</h1>
      </div>
      <ul id="nav-bar">
        <li className="nav-tab">
          <Link to="/your-recipes">Your Recipes</Link>
        </li>
        <li className="nav-tab">
          <Link to="/cooking-log">Cooking Log</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
