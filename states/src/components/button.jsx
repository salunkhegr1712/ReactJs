import react, { Component } from "react"
import ReactDOM  from "react-dom";
function Btt(props){
    let count=0;

    // now this code can be able to change the data on basis of the rerendering 
    // but still this code is lengthy and repatative use of the code also taking place 
    // here an which dont want as we are using the react 
    function increment(){
        console.log("the button is got clicked !")

        console.log(++count)
        ReactDOM.render(
            <div>
            <h1>{count}</h1>
            {/* //IMP */}
            {/* here in the below that the for function inside {} where we write the JS code */}
            {/* we dont have write () after using a function which may be lead to some error */}
            <button onClick={increment}>+</button>
        </div>,document.getElementById("root")
        )
    }
    return (
        <div>
            <h1>{count}</h1>
            {/* //IMP */}
            {/* here in the below that the for function inside {} where we write the JS code */}
            {/* we dont have write () after using a function which may be lead to some error */}
            <button onClick={increment}>+</button>
        </div>
    )
}

// so now our function is ready to use as the Component so lets export it 
export default Btt;