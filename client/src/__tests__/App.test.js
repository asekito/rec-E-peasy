import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import App from "../App";
import Home from "../components/HomePage/Home";
import Recipes from "../components/Recipes/Recipes";

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
});
