import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/NavBar/Nav";
import Home from "./components/HomePage/Home";
const Recipes = lazy(() => import("./components/Recipes/Recipes"));
const CookLog = lazy(() => import("./components/CookLog/CookLog"));

const App = () => {
  return (
    <Router>
      <div id="app">
        <nav>
          <Nav />
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/your-recipes">
              <Recipes />
            </Route>
            <Route path="/cooking-log">
              <CookLog />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
