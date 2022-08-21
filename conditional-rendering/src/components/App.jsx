import React, { Component } from "react";
import Form from "./form";
import Heading from "./heading";
// it is one way but as you see it takes alot of the time to manilpulate the function code 
// we want something new and more powerfull than this 
// let conditional_rendering=(loggedIn)=>{
//     if(loggedIn)
//         return (<div className="container"><h1>Welcome Back Sir !! </h1></div>);
//     return <Form/>
//     // form is a Component which is declared inside the component section and it is super usefull 
// }

// this code is final it is so small that you can see that it do all things which we wanted and did same effect 
function App() {
    // declaring a Boolean 
    // we are going to use the ternary operator 
    let loggedIn=true;
    // declaring varible to store the  html tags 
    let c;
    loggedIn?c=<Heading/>:c=<Form/>

    // return the stored tags inside the variable c 
    return c
}   

export default App;

// it is our way whatever we can do that means that you can use the multiple component files or create a 
// single Object and add the function to them and use the dot operator to fetch each one of them