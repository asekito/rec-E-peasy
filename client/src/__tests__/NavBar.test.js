import React from "react";
import { shallow } from "enzyme";
// import sinon from "sinon";

import Nav from "../components/NavBar/Nav";

describe("Nav", () => {
  const wrapper = shallow(<Nav />);
  test("should render navigation bar", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render 4 navigation tabs", () => {
    expect(wrapper.find("Link")).toHaveLength(4);
  });

  it("should have the Link tabs for home, recipes, and the cooking logs", () => {
    expect(wrapper.find("Link").at(0).text()).toContain("Rec-E-Peasy");
    expect(wrapper.find("Link").at(1).text()).toContain("Home");
    expect(wrapper.find("Link").at(2).text()).toContain("Your Recipes");
    expect(wrapper.find("Link").at(3).text()).toContain("Cooking Log");
  });

  it("should have the title Link element to exist and direct back to the home page", () => {
    // const onButtonClick = sinon.spy();
    const titleHomeLink = wrapper.find("Link");
    expect(titleHomeLink.at(0)).toHaveLength(1);
    expect(titleHomeLink.at(0).props().to).toEqual("/");
    // titleHomeLink.at(0).simulate("click");
    // expect(onButtonClick).to.have.length("callCount", 1);
  });

  it("should have the Link element for the home tab and direct back to the home page", () => {
    const titleHomeLink = wrapper.find("Link");
    expect(titleHomeLink.at(1)).toHaveLength(1);
    expect(titleHomeLink.at(1).props().to).toEqual("/");
  });

  it("should have the Link element for the home tab and direct back to the home page", () => {
    const titleHomeLink = wrapper.find("Link");
    expect(titleHomeLink.at(2)).toHaveLength(1);
    expect(titleHomeLink.at(2).props().to).toEqual("/your-recipes");
  });

  it("should have the Link element for the home tab and direct back to the home page", () => {
    const titleHomeLink = wrapper.find("Link");
    expect(titleHomeLink.at(3)).toHaveLength(1);
    expect(titleHomeLink.at(3).props().to).toEqual("/cooking-log");
  });
});
