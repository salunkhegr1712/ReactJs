import React from "react";
// to make websit functional we will add the states
// state is component which has property to get control on behavior of the component and can
// make it more interactive 

import { useState } from "react";
import { ReactDOM } from "react";


function Hideandseek(){
    let [stateval,statefunc]=useState();

    function hide(){
        statefunc("im hidden")
        
    }
    function seek(){
        statefunc("im not hidden")

    }

    return (
    <div>
        <h1>{}</h1>
        {/* never use ( for function inside jsx ) */}
        <button onClick={hide}>H</button>
        <button onClick={seek}>S</button>
    </div>
    )
}
export default Hideandseek;