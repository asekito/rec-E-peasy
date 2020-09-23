import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/NavBar/Nav";
import Recipes from "./components/NavBarPages/Recipes";
import CookLog from "./components/NavBarPages/CookLog";

const App = () => {
  return (
    <Router>
      <div id="app">
        <nav>
          <Nav />
        </nav>
        <Switch>
          <Route path="/your-recipes">
            <Recipes />
          </Route>
          <Route path="/cooking-log">
            <CookLog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
