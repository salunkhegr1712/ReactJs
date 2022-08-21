//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
// https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

import React, { Component } from "react";
import ReactDOM from "react-dom";
import object from "./comonents/function";
import Avatar from "./comonents/avatar";
// importing array of object 
import contacts from "../src/contacts"
// so as we can see we use the Component to decrease our size of code 
// but Component also takes the space as we have pass the attribute values to each and every component as props 
// so we have to make that things automated 
// so for that we have to store the Information as in the form of array of object 

// just a function and databasea t background and a card template is enough 
function createCard(cont){
    return (
        // you have to keep unique 
        // so for that purpose maintain something such that that character can maintain there uniqueness from them 
        <object.Card
        key={cont.id}
        name={cont.name}
        immgg={cont.immgg}
        occupation={cont.occupation}
        contact_no={cont.contact_no}
        email={cont.email}
    />
    )
}
ReactDOM.render(
    <div>
    {contacts.map(createCard)}
    </div>
, document.getElementById("root"));


// code before mapping 
// ReactDOM.render(
//     <div>
//     <Avatar immgg="https://i.ibb.co/xm6Cv6B/ghansham.png" ></Avatar>
//     {/* <object.Card
//         name="Ghansham Salunkhe"
        
//         occupation="IT Engineer"
//         contact_no="8624969401"
//         email="salunkhegr1712@gmail.com"
//     /> */}
//     <object.Card
//         name="Beyonce"
//         immgg="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
//         occupation="Actress"
//         contact_no="1234566769"
//         email="b@beyonce.com"
//     />
//     <object.Card
//         name="Jack Bauer"
//         immgg="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
//         occupation="Web Developer"
//         contact_no="8735121254"
//         email="jack@nowhere.com"
//     />
//     <object.Card
//         name="Chuck Norris"
//         immgg="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
//         occupation="Doctor"
//         contact_no="5528428961"
//         email="gmail@chucknorris.com"
//     />
    
//     </div>