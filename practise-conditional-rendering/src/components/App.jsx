import React from "react";
import Form from "./form";
var userIsRegistered = false;

function App() {
  // userIsRegistered=true;
  // userIsRegistered?c=<Form IsRegistered={userIsRegistered}/>:c=<Form1/>
  return <Form IsRegistered={userIsRegistered}/>;
}

export default App;
