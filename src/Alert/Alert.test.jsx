import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Alert from "./Alert";

configure({ adapter: new Adapter() });

describe("Alert Unit tests", () => {
  it("should render a div without failing", () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper.type()).toEqual("div");
  });
  it("should render the alert as a span element", () => {
    const wrapper = shallow(<Alert as="span" />);
    expect(wrapper.type()).toEqual("span");
  });
  it("should render a primary alert", () => {
    const wrapper = shallow(<Alert primary />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.hasClass("alert-primary")).toEqual(true);
  });
  it("should render a secondary alert", () => {
    const wrapper = shallow(<Alert secondary />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.hasClass("alert-secondary")).toEqual(true);
  });
  it("should render a success alert", () => {
    const wrapper = shallow(<Alert success />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.hasClass("alert-success")).toEqual(true);
  });
  it("should render a danger alert", () => {
    const wrapper = shallow(<Alert danger />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.hasClass("alert-danger")).toEqual(true);
  });
  it("should render a warning alert", () => {
    const wrapper = shallow(<Alert warning />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.hasClass("alert-warning")).toEqual(true);
  });
  it("should render a info alert", () => {
    const wrapper = shallow(<Alert info />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.hasClass("alert-info")).toEqual(true);
  });
  it("should render a light alert", () => {
    const wrapper = shallow(<Alert light />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.hasClass("alert-light")).toEqual(true);
  });
  it("should render a dark alert", () => {
    const wrapper = shallow(<Alert dark />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.hasClass("alert-dark")).toEqual(true);
  });
  it("should render a dismissable primary alert", () => {
    const wrapper = shallow(<Alert primary dismissable />);
    expect(wrapper.type()).toEqual("div");
    expect(wrapper.hasClass("alert-primary")).toEqual(true);
    const closeButton = wrapper.find("button");
    expect(closeButton).toBeTruthy();
    expect(closeButton.hasClass("close")).toEqual(true);
    closeButton.simulate("click");
    expect(wrapper.type()).toEqual(null);
  });
  it("should render null when the dismissable button is clicked", () => {
    const wrapper = shallow(<Alert primary dismissable />);
    const closeButton = wrapper.find("button");
    closeButton.simulate("click");
    expect(wrapper.type()).toEqual(null);
  });
  it("should render execute onDismiss when dismiss clicked", () => {
    const onDismiss = jest.fn();
    const wrapper = shallow(
      <Alert primary dismissable onDismiss={onDismiss} />
    );
    const closeButton = wrapper.find("button");
    closeButton.simulate("click");
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
