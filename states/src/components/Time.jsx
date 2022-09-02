import React, { useState } from "react";

// here we will create a autoupdating clock which get automatically changed 

// first we will create a function which will return current time 
let time=""
function getTime(){
    const day=new Date();

    return day.getHours()+":"+day.getMinutes()+":"+day.getSeconds()
}


function Time(){
    let [stateVal,stateFunction]=useState(getTime());
    time=getTime()

    function update(){
        time=getTime();
        stateFunction(time);
    }
    function clk(){
        let c=document.querySelector("button");
        c.click();
    }
    // we can use any of the following on clicks the button and rerender 
    // while another will call function after interval as specified which lead to 
    // change in time inside the clock
    setInterval(clk,1000)

    // setInterval(update,1000)
    return (
        <div>
            
            <h1>{stateVal}</h1>
            {/* //IMP */}
            {/* here in the below that the for function inside {} where we write the JS code */}
            {/* we dont have write () after using a function which may be lead to some error */}
            <button className="clk" onClick={update}>GET TIME</button>
        </div>
    )
}

export default Time;

// deconstructing in js 
// >>> [a,b]=[10,20]
// >>> a
// 10
// >>> b
// 20
// >>> 