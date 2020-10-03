import React from "react";
import { shallow } from "enzyme";

import Recipes from "../components/Recipes/Recipes";

describe("Recipes component", () => {
  it("should render the recipes page", () => {
    const wrapper = shallow(<Recipes />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
