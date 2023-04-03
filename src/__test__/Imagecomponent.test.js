import { render, screen } from "@testing-library/react";
import React from "react";

import Imagecomponent from "../Image/Imagecomponent";

test("Image should be shown on screen", () => {
  render(<Imagecomponent />);
  const logo = screen.getByRole("img");
  expect(logo).toHaveAttribute("alt", "img");
});
