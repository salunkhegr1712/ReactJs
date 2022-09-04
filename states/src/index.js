// importing basic function which we need in order to run this code 
import React from "react";
import Reactdom from "react-dom"
import Login from "./components/Login"

// so as a whole now as we know how can we rerender our page and grab some output exactly like that we can do the same 

// render the page with component called Login 
Reactdom.render(<Login/>,document.getElementById("root"))

// now we have see how can we add the event listeners to our code and how can we use them to make
// our page interactive 
