import React from "react";
import Input from "./input"
function Form(){
    return (
    <div className="container">
    <h1>Hello</h1>
    <form className="form">
        <Input type="text" placeholder="username"/>
        <Input type="password" placeholder="password"/>
        <button type="submit">Login</button>
      </form>
    </div>
    
    );
}

export default Form;