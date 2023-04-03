import { render, screen } from "@testing-library/react";
import React from "react";

import Cardcomponent from "../Card/Cardcomponent";

test("Image component should be rendered", () => {
  const component = render(<Cardcomponent />);
  const childElement = component.findByTestId("Imagecomponent");
  expect(childElement).toBeTruthy();
});

test("Label card component should be rendered", () => {
  const component = render(<Cardcomponent />);
  const childElement = component.findByTestId("Labelcardcontainer");
  expect(childElement).toBeTruthy();
});

test("Icon component should be rendered", () => {
  const component = render(<Cardcomponent />);
  const childElement = component.findByTestId("Iconcomponent");
  expect(childElement).toBeTruthy();
});
