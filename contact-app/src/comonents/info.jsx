import React from "react";

function Information(props){
    return (
        <div>
        <p className="info">{props.occupation}</p>
        <p className="info">{props.contact_no}</p>
        <p className="info">{props.email}</p>
        </div>
    );
}

export default Information;