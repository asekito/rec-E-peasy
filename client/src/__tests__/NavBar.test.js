import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import Nav from "../components/NavBar/Nav";
import Home from "../components/HomePage/Home";

describe("Nav", () => {
  test("shoulde render navigation bar", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render 3 navigation tabs", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find("Link")).toHaveLength(4);
  });
});
