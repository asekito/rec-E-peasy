import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import "./App.css";
import Nav from "./components/NavBar/Nav";

const App = () => {
  return (
    <div id="app">
      <Nav />
    </div>
  );
};

render(<App />, document.getElementById("root"));
