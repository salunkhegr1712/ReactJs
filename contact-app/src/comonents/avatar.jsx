import React, { Component } from "react";

// create a function naming avatar and it will provide us the info 

// add props as the argument to the Component 
function Avatar(props){
    return <img className="circle-img" src={props.immgg}/>
}

export default Avatar;