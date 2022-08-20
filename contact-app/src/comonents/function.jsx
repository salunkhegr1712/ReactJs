import React from "react";

const object={
    Card:function(props){

        return (<div className="card">
        <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.immgg}/>
        </div>
        <div className="bottom">
        <p className="info">{props.occupation}</p>
        <p className="info">{props.contact_no}</p>
        <p className="info">{props.email}</p>
        </div>        
    </div>);
    }
}

export default object;