import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Badge from "./Badge";

configure({ adapter: new Adapter() });

describe("Badge Unit tests:", () => {
  it("should render a span without failure", () => {
    const wrapper = shallow(<Badge />);
    expect(wrapper.type()).toEqual("span");
  });

  it("should render a badge span", () => {
    const wrapper = shallow(<Badge />);
    expect(wrapper.hasClass("badge")).toEqual(true);
  });
  it("should render a primary badge span", () => {
    const wrapper = shallow(<Badge primary />);
    expect(wrapper.hasClass("badge")).toEqual(true);
    expect(wrapper.hasClass("badge-primary")).toEqual(true);
  });
  it("should render a secondary badge span", () => {
    const wrapper = shallow(<Badge secondary />);
    expect(wrapper.hasClass("badge-secondary")).toEqual(true);
  });
  it("should render a successbadge span", () => {
    const wrapper = shallow(<Badge success />);
    expect(wrapper.hasClass("badge-success")).toEqual(true);
  });
  it("should render a danger badge span", () => {
    const wrapper = shallow(<Badge danger />);
    expect(wrapper.hasClass("badge-danger")).toEqual(true);
  });
  it("should render a warning badge span", () => {
    const wrapper = shallow(<Badge warning />);
    expect(wrapper.hasClass("badge-warning")).toEqual(true);
  });
  it("should render a info badge span", () => {
    const wrapper = shallow(<Badge info />);
    expect(wrapper.hasClass("badge-info")).toEqual(true);
  });
  it("should render a light badge span", () => {
    const wrapper = shallow(<Badge light />);
    expect(wrapper.hasClass("badge-light")).toEqual(true);
  });
  it("should render a dark badge span", () => {
    const wrapper = shallow(<Badge dark />);
    expect(wrapper.hasClass("badge-dark")).toEqual(true);
  });
  it("should render a pill shaped badge span", () => {
    const wrapper = shallow(<Badge pill />);
    expect(wrapper.hasClass("badge-pill")).toEqual(true);
  });
  it("should render a badge as a div", () => {
    const wrapper = shallow(<Badge as="div" />);
    expect(wrapper.hasClass("badge")).toEqual(true);
    expect(wrapper.type()).toEqual("div");
  });
});
