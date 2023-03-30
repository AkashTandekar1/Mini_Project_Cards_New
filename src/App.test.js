import { render, screen } from "@testing-library/react";
import App from "./App";
import React from 'react'
import Cardcomponent from "./Card/Cardcomponent";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('Render card component in the document', () => {
//   const component = render(<App />);
//   const childcomponent = component.container
//   expec(childcomponent).toBeInTheDocument();
// });

// jest.mock('./Card/Cardcomponent', () => () => <div data-test-id="Cardcomponent" />)

// test('Should render card component', () => {
//   const { getBytestId } = render(<App/>)
//   expect(getBytestId(/Card/Cardcomponent)).toBeInTheDocument()
// }) 


test('Should render card component', () => {
    // const component = render(<App/>)
    // expect(component.contains(<Cardcomponent/>).exists()).toBeInTheDocument();
    // expect(component.firstChild).toMatchSnapshot()
    const { getByRole, getByTestId } = render(<App/>);

    const root = getByRole('root');
    const child = getByTestId('child');

    expect(root).toContainElement(child);
    
    
    
   

}) 


// expect(container.firstChild.classList.contains('foo')).toBe(true)
// expect(container.getElementsByClassName('default').length).toBe(1);

