// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
// import ReactDOM from "react-dom";
import cars from "../database";
function Deconstruction(props){
    let [honda,tesla]=cars;
    let [hondaTopColour,teslaTopColour]=[honda.coloursByPopularity[0],tesla.coloursByPopularity[0]]

    let [teslastats,hondastats]=[tesla.speedStats,honda.speedStats]
    let [teslaTopSpeed,hondaTopSpeed]=[teslastats.topSpeed,hondastats.topSpeed]
    return (<table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>)
}


export default Deconstruction;

// Output:
// Brand	Top Speed
// Tesla Model 3	150	red
// Honda Civic	140	black