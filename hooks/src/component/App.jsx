import React from "react";
// we are going to use the function from react so that we can rerender our code 
// so if we want add some functionality so we can easily add them 
import { useState } from "react";
import { ReactDOM } from "react";



let count=0;

function App(){
    // as you see you click on button but value is not change as rerendering is not taken place 
    // WE are assigning the values to the constant 
    let [stateVal,statefunc]=useState();
    // stateFUnc is function which used to reload value 
    // so we have hold on the value 
    // console.log(state)
    // (2) [1000, ƒ]0: undefined1: ƒ ()length: 2[[Prototype]]: Array(0)
    // the arguments you pass will be  first Element

    // if youre exporting a function which use another function so just insert the another function inside the main function
    function increase(){
        
        statefunc(count) // this function will call the whole compoment again and again 
        count++;
        // console.log(count);

    // to make rerendering possible we use hooks and here we will be learning the useState function 
    

    }
    function decrease(){
        
        statefunc(count)
        count--;
    }
    return(
        <div className="container">
        <h1>{count}</h1>
        {/* the onClick is an operation which is called as event handler and it is used as onclick in js
        but as jsx use the camel case so we have to use it like that and here we are using it to increment our value   */}
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        </div>
    )
}

export default App;