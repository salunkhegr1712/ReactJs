// importing basic function which we need in order to run this code 
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import ReactDOM from "react-dom"
import Form from "./components/Form"

// so as a whole now as we know how can we rerender our page and grab some output exactly like that we can do the same 

// render the page with component called Login 
// Reactdom.render(<Login/>,document.getElementById("root"))

// now we have see how can we add the event listeners to our code and how can we use them to make
// our page interactive 


// now we will use the forms inside the react and with use of the forms we will take some input from user and we 
// will process it 

// now we have to use firstly the events like the onclick onchange which get called every time if input Block 
// have some things changed  
//  we are passing thw value from abc and the props in the function block of Component is toHaveErrorMessage
//  which is handling the input and throw it back also 
ReactDOM.render(<Form abc="Hello"/>,document.getElementById("root"));


