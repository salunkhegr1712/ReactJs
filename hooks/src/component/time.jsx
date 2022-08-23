import React  from "react";
import { useState } from "react";

function showtime(){
    let time = new Date().toLocaleTimeString();
    return time
}

function Time(){
    
    let [stateval,statefunc]=useState(showtime)

    function gettime(){
        statefunc(showtime)
    }

    // so we created a function which will click the button after some interval 
    // and time will get update automatically
    function click1(){
        document.getElementById("abcd").click()
    }
    // setting a interval which click on mouse 
    setInterval(click1,1000)
    return (
        <div className="container">
          <h1>{stateval}</h1>
        
          <button id="abcd" onClick={gettime}>Get Time</button>
        </div>
      );
}

export default Time;