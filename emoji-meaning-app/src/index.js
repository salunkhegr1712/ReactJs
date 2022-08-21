import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
import object from "./components/functions"
import emojipedia from "./emojipedia"
console.log(emojipedia);
function createBox(eff){
    return (
    <object.Card key={eff.id} emoji={eff.emoji} name={eff.name} meaning={eff.meaning}/>);
    
}
ReactDOM.render(
    emojipedia.map(createBox)
    ,document.getElementById("root"));
