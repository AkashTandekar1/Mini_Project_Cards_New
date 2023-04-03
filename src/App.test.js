import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";
import Cardcomponent from "./Card/Cardcomponent";

import "@testing-library/jest-dom/extend-expect";

test("test child component", () => {
  const component = render(<App />);
  const childElement = component.findByTestId("text");
  expect(childElement).toBeTruthy();
});
