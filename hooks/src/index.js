import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/App"
import Hideandseek from "./component/hideandseek"
import Time from "./component/time"
let count=0

// ReactDOM.render(
// <App/>
//   ,
//   document.getElementById("root")
// );


// ReactDOM.render(
// <Hideandseek/>
//   ,
//   document.getElementById("root")
// );


//Challenge:
//1. Given that you can get the current time using:
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

function showtime(){
  let time = new Date().toLocaleTimeString();
  return time
}
ReactDOM.render(<Time tttt={showtime}/>,document.getElementById("root"))