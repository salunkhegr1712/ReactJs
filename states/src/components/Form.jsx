import React, { Component, useState } from "react";


// in Component form we are using props 


// now we will use the function Form to print changed every time when input is changed 
function Form(props){
    let name=""
    let n1=""
    let [stateVal,stateFunction]=useState(n1)

    // so as we already created a Component so it is our part see which value is responsible for change 
    function change(event){
        // console.log("things in input were changed!")
        // see wnat are the things which are changed as we change the content inside the event 

        // console.log(event);
        // ow we will see what went to chnage the value inside the block 
        // console.log(event.target.value)
        // console.log(event.target.type)
        // console.log(event.target.placeholder)
        name=event.target.value

        // so now we are getting name so we have to rerender so now we will use state 
        console.log(name)
        // stateFunction(name)

    }
    // function which only get invoked if you click the mouse key on the button 
    function changeName(event){
            console.log("clicked")
            // n1=name
            stateFunction(name)
                // stateFunction(name)

            event.preventDefault();
    }
    return(
        <div className="container">
        <h1>{"Hello " + stateVal}</h1>

        {/* now in input we are going to use the onchange event so that we can see how many time did the 
        content inside the input get changed  */}
        {/* on change will send call to the function and we can manupulate next steps inside the change function  */}
        
        {/* as with simple form the react form get realoaded automatically which is error in your case as you wnat
        a static result on your side  */}
        {/* so every attribute has own property and form has peoperty to reload page such that new page will shown 
         */}
        <form onSubmit={changeName}>
        <input 
        type="text"
        placeholder="Enter Your Name" 
        onChange={change}
        // so now we are able to fetch value to html also 
        // so just make update value of tag in input like 
        // value={name}
        
       />
        <button type= "submit"> Submit</button>
        </form>
        
        </div>
        

    )
}


export default Form;

// target block has so lot of attribute as there are large Number of factors are there from which change is occuring 

// on inoputing value ghansham how things are get changed 

// console.log(event.target.value)
// console.log(event.target.type)
// console.log(event.target.placeholder)
// G
// text
// Enter Your Name
// Gh
// text
// Enter Your Name
// Gha
// text
// Enter Your Name
// Ghan
// text
// Enter Your Name
// Ghans
// text
// Enter Your Name
// Ghansh
// text
// Enter Your Name
// Ghansha
// text
// Enter Your Name
// Ghansham
// text
// Enter Your Name