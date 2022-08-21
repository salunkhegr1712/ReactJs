import React from "react";

// giving msg to client on basis of current time 
function time(){
    const day=new Date();
    let f=day.getHours;
    if (f>=6 && f<12)
        return "Good Morning "
    else if(f>=12 && f<16)
        return "Good Afternoon "
    else if(f>=16 && f<7)
        return "Good Evening "
    else
        return "Good Night "
}

function Heading(){
    return <div className="container"><h1>{time()}Sir !! </h1></div>;
}
export default Heading;