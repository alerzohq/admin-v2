import React from "react";
import {render, screen} from '@testing-library/react'
import Button from "..";


test.only("Button render children", () => {
 render(<Button onClick={() =>{}}>
    Button
   </Button>);
 const buttonElement = screen.getByText(/Button/i);
 expect(buttonElement).toBeInTheDocument();

 
})