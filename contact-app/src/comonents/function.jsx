import React, { Component } from "react";
import Avatar from "./avatar";
import Information from "./info";
// this is a Component and we are using them but i want to make them even smaller 
// for that lets do modification 
// modified piece of code 
const object={
    // one thing about props that you cant fetch the key value from props as key is not  belong to prop 
    // it belog to uniqueness of perticular object 
    Card:function(props){

        return (<div className="card">
        <div className="top">
        <h2 className="name">{props.name}</h2>
        {/* lets create a component called avatar to replace this image  */}
        <Avatar immgg={props.immgg}></Avatar>
        </div>
        <div className="bottom">
            {/* created a component with props which can ablt to print the Information  */}
            {/* here we are using multiple component in order to make out work done  */}
            {/* hello im ghansham salunkhe and im t */}
            <Information occupation={props.occupation} contact_no={props.contact_no} email={props.email}></Information>
        </div>        
    </div>);
    }
}

export default object;

// original code 
// const object={
//     Card:function(props){

//         return (<div className="card">
//         <div className="top">
//         <h2 className="name">{props.name}</h2>
//         <img className="circle-img" src={props.immgg}/>
//         </div>
//         <div className="bottom">
//         <p className="info">{props.occupation}</p>
//         <p className="info">{props.contact_no}</p>
//         <p className="info">{props.email}</p>
//         </div>        
//     </div>);
//     }
// }