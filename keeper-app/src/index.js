// tasks for now 
//1. Create a new React app. =>done
//2. Create a App.jsx component.  =>done
//3. Create a Header.jsx component that renders a <header> element  =>done
//to show the Keeper App name in an <h1>.  =>done
//4. Create a Footer.jsx component that renders a <footer> element  =>done
//to show a copyright message in a <p> with a dynamically updated year.  =>done
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.


import React from 'react';
import ReactDOM from 'react-dom';
import object from "./comonents/function.jsx"
import notes from './notes.js';
let addNote=(proc)=>{
    return (<object.Note
        key={proc.key}
        title={proc.title}
        content={proc.content}
    />);
}
// console.log(notes)
ReactDOM.render(<div>
    <object.Heading></object.Heading>
    
    {notes.map(addNote)}
    <object.Foot></object.Foot>
</div>
,document.getElementById("root"));