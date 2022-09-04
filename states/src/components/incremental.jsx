import React, { useState } from "react";

let count=0;
function Incremental(props){
    let [stateval,stateFunction]=useState(0);
    
    function inc(){
        count++;
        stateFunction(++stateval);
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>+</button>
        </div>
    )
}

export default Incremental;