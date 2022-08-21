import React from "react";

function Form(props) {
  return (
    <div className="container">
    {props.IsRegistered?<h1>Welcome Back ! </h1>:<h1>Kindly Register </h1>} 
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.IsRegistered?<></>:<input type="password" placeholder="Confirm Password" />} 
      {props.IsRegistered?<button type="submit">Login</button>:<button type="submit">Register</button>} 
      
    </form>
    </div>
  );
}

export default Form;
