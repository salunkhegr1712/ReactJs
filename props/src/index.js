import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import ReactDOM from "react-dom";

// props are one who acts like parameters to structure which can be said as the components 
// so as we can see with all this code is become highly unordered and also very bad to see
// so we first create the components and later we will persue to do next things 

// so now just written code once and we alreafy created 3 4 instances of data and such how we can 
// data to Component and will make our life simple
function Contacts(props){
  // so props is a object which can access all the attribute passsed from the component tag which 
  // is under the render 
    return (<div>
    {/* we will use { } and . operator to fetch and display values inside the props */}
        <h2>Name: {props.name}</h2>
        {/* you have be carefull whenever you are working with self closing tags  */}
        <img className="imagee" src={props.ig} alt="ghansham image"/>
        <p>Branch : {props.branch}</p>
        <p>Contact No: {props.mob}</p>
        <p>Email Add: {props.email}</p>
      </div> 
    );
}

// so take a example from the h1 tag in html
{/* <h1 id="hello" class="never" type="text">hello world</h1> */}
// so as you can see inside the above Comment the h1 tag has id class and type as attribute and as you also know that 
// all tags has there own predefined tags which we can use but in html we are not allowed to use the user defined tags 
// so for that purpose in react we have properties which you can pass through Component which will acts like argument to Component
// // and you can fetch them with a object called props inside the Component
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    {/* so we are now passing details of ghansham as the properties to the component Contacts */}
    <Contacts name="Ghansham Salunkhe" mob="8624969401" branch="Computer Engineering" email="salunkhegr1712@gmail.com" ig="https://i.ibb.co/xm6Cv6B/ghansham.png"></Contacts>
    {/* if you not give any attribute so that block will get skiped  */}
    {/* <Contacts name="Ghansham Salunkhe" mob="8624969401"  email="salunkhegr1712@gmail.com" ig="https://i.ibb.co/DbVDDGG/Screenshot-from-2022-08-20-19-00-57.png"></Contacts> */}

    <Contacts ig="https://i.ibb.co/0FPyk06/Screenshot-from-2022-08-20-19-01-07.png"></Contacts>
    <Contacts name="Ghansham Salunkhe" mob="8624969401" branch="Computer Engineering" email="salunkhegr1712@gmail.com" ig='https://i.ibb.co/DbVDDGG/Screenshot-from-2022-08-20-19-00-57.png'></Contacts>
  </div>,
  document.getElementById("root")
);

// sample code 
// <div>
// <h1>My Contacts</h1>
// {/* so we are now passing details of ghansham as the properties to the component Contacts */}
// <Contacts name="Ghansham Salunkhe" mob="8624969401" branch="Computer Engineering" email="salunkhegr1712@gmail.com"></Contacts>
// {/* if you not give any attribute so that block will get skiped  */}
// <Contacts name="Ghansham Salunkhe" mob="8624969401"  email="salunkhegr1712@gmail.com"></Contacts>

// <Contacts></Contacts>
// <Contacts name="Ghansham Salunkhe" mob="8624969401" branch="Computer Engineering" email="salunkhegr1712@gmail.com"></Contacts>
// </div>,

// output 
// My Contacts
// Name: Ghansham Salunkhe

// Branch : Computer Engineering

// Contact No: 8624969401

// Email Add: salunkhegr1712@gmail.com
// Name: Ghansham Salunkhe

// Branch :

// Contact No: 8624969401

// Email Add: salunkhegr1712@gmail.com
// Name:

// Branch :

// Contact No:

// Email Add:
// Name: Ghansham Salunkhe

// Branch : Computer Engineering

// Contact No: 8624969401

// Email Add: salunkhegr1712@gmail.com

// links 
// https://i.ibb.co/xm6Cv6B/ghansham.png
// https://i.ibb.co/0FPyk06/Screenshot-from-2022-08-20-19-01-07.png
// https://i.ibb.co/DbVDDGG/Screenshot-from-2022-08-20-19-00-57.png