import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import App from "../App";
// import Home from "../components/HomePage/Home";
// import Recipes from "../components/Recipes/Recipes";

describe("App", () => {
  test("should render", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders the navigation component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Nav")).toHaveLength(1);
  });

  it("renders the home component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Home")).toHaveLength(1);
  });

  it("should have all 3 routes to switch from", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Switch")).toHaveLength(1);
    expect(wrapper.find("Route")).toHaveLength(3);
  });
});
