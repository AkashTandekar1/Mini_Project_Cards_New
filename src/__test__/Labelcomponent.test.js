import { render, screen } from "@testing-library/react";
import React from "react";

import Labelcomponent from "../Label/Labelcomponent";

// test("H1 Label should be shown on screen",  async () => {
//   render(<Labelcomponent/>);
//   const LabelElementH1 = screen.getByText(/List Item Title/i);
//   expect(LabelElementH1).toBeInTheDocument();
// });

// test("H2 Label should be shown on screen",  async () => {
//     render(<Labelcomponent/>);
//     const LabelElementH2 = screen.getByText(/List Item Subtitle/i);
//     expect(LabelElementH2).toBeInTheDocument();
//   });

// test('checks the value of the Title component', () => {
//   render(<Labelcomponent/>);
//   const titleValue = screen.getByText('List Item Title')
//   expect(titleValue).toBe('List Item Title')
// })

// test('checks the value of the Title component', () => {
//   render(<Labelcomponent/>);
//   const titleValue = screen.getByRole('heading');
// expect(titleValue).toBeInTheDocument();
// expect(titleValue).toHaveTextContent(/List Item Title/i);
// })

// test('checks the value of the Title component', () => {
//   render(<Labelcomponent/>);
//   expect(screen.getByText(`List Item Title`)).toBeInTheDocument();
// })

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
