import React, { Component, useState } from "react";
let count=0;


function App(){
    
    // const state=useState(0);
    // so lets make our life easy 

    let [stateVal,stateFunction]=useState(0);
    // so mapping state[0] to stateVal and state[1] to stateFunction 
    // state[0] it it initial value which you send it as parameter
    // state[1] it is the function which is used to rerender the component and
    // it is main part inside the hooks
    // so lets console log the stateval and stateFunction

    // console.log("state value is : "+stateVal);
    // console.log("state function is : "+stateFunction);

    // state value is : 0
    // App.jsx:18 state function is : function () { [native code] }

    function increment(){
        // console.log("i got clicked!", count)
        count+=1;
        // state[0]=count;
        // we are changing the count value and passing it through the state and useStatefunction and
        // now we can rerender our page with the help of the  useState
        stateFunction(count)
    }

    // decrement function to decrease the value of count
    function decrement(){
        // console.log("i got clicked!", count)
        count-=1;
        // state[0]=count;
        // we are changing the count value and passing it through the state and useStatefunction and
        // now we can rerender our page with the help of the  useState
        stateFunction(count)
    }

    // console.log(state);
    // we can also sent interval so that count will automatically get updated each time 
    // setInterval(increment,5000);
    return (
        <div>
            <h1>{stateVal}</h1>
            {/* //IMP */}
            {/* here in the below that the for function inside {} where we write the JS code */}
            {/* we dont have write () after using a function which may be lead to some error */}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

// export the created Component with the keyword export default
export default App;


// state value is : 0
// state function is : function () { [native code] }
// state value is : 1
// state function is : function () { [native code] }
// state value is : 2
// state function is : function () { [native code] }
// state value is : 3
// state function is : function () { [native code] }
// state value is : 4
// state function is : function () { [native code] }
// state value is : 5
// state function is : function () { [native code] }
// state value is : 6
// state function is : function () { [native code] }
// state value is : 7
// state function is : function () { [native code] }
// state value is : 8
// state function is : function () { [native code] }
// state value is : 9
// state function is : function () { [native code] }
// state value is : 10
// state function is : function () { [native code] }
// state value is : 11
// state function is : function () { [native code] }
// state value is : 12
// state function is : function () { [native code] }
// state value is : 13
// state function is : function () { [native code] }