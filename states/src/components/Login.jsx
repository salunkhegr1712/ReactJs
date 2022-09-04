import React, { useState } from "react";
let c="Hello";

let style1={}
function Login(){
    // this code is here which we used multple useState as we have to manipulate both messgae and adding
    // hovering over mouse property 
    let [stateval,stateFunction]=useState("Hello");
    let [styleval,stylefunc]=useState(style1)

    function callby(){
        c="Submitted";
        // on mouseclick the value of message is changes 
        stateFunction(c)
    }   
    function mouseover(){
        // when you hover over mouse the stylefunc will rerender styles newly added 
        style1={
            color:"white",
            backgroundColor:"black"
        }
        // changing style 
        stylefunc(style1)
    }  
    function mouseout(){
        style1={
            color:"black",
            backgroundColor:"white"
        }
        // changing style 
        stylefunc(style1)
    } 
    return(
        <div className="container">
        <h1>{c}</h1>
        <input type="text" placeholder="What's your name?" />
        {/* onClick is event which caused when you try to click on mouse such like that there are allot no
        of event which can be invoked you can see them all at  */}
        {/* https://www.w3schools.com/tags/ref_eventattributes.asp */}
        <button onClick={callby} style={styleval} onMouseOver={mouseover} onMouseOut={mouseout}>Submit</button>
        </div>
    )


}

export default Login;


// goals we have to make event handling for when you put your mouse over button then colour of button should change 
// how did i code this 
// first i visited the events from the website of w3school then after that is been easy as we know the name od event and just have create
// a new function then send that function when we deal with that event if is

// now the things which we want to change will go in stateFunction as argument and else it will do his part of work 

// also in the useState we are able to pass the value as the argument 