import { render, screen } from "@testing-library/react";
import React from "react";

import Iconcomponent from "../Icon/Iconcomponent";

test("Image should be shown on screen", () => {
  render(<Iconcomponent />);
  const title = screen.getByTitle("some title");
  expect(title).toBeInTheDocument();
});
