import { render, screen } from "@testing-library/react";
import React from "react";

import Labelcomponent from "../Label/Labelcomponent";

test("Title in H1 element should be shown on screen", () => {
  render(<Labelcomponent />);
  const title = screen.getByTitle("h1");
  expect(title).toBeInTheDocument();
});

test("ITitle in H2 element should be shown on screen", () => {
  render(<Labelcomponent />);
  const title = screen.getByTitle("h2");
  expect(title).toBeInTheDocument();
});
