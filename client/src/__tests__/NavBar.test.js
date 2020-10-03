import React from "react";
import { shallow } from "enzyme";

import Nav from "../components/NavBar/Nav";

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
