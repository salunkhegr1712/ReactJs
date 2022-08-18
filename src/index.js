// in this module we will learn how to style the jsx files with use of jsx in javaScript

import react from "react";
import React from "react";
import reactDom from "react-dom";
/* // so class is name which is specified in the html but not supported in html but we 
    // are using JSX so we have use the name convections according to the  javascript
    // as you also know that the javascript uses the camelCasing while html not use plzz reffer the txt
    // file in react folder of laptop  
    // ex: contenteditable in HTML but contentEditable in js */

// so now lets play with code and make it more plain 
let img1="https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000";
let img2="https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg?w=2000";
let img3="https://images.indianexpress.com/2021/04/indian-food-1200.jpg";
let c1="image"
reactDom.render(
  <div>
    <h1 className="head" contentEditable="true" spellCheck="false">
      {/* if you enable contentEditable so you can make changes inside the tags which you provided  */}
      {/* spellcheck will check for the  typos   */}
      Hello Ghansham Here
    </h1>
    <div>
      {/* so there are lot of types of the tags are there in html 
      in order to use the not ended tags we have to prefer to use the self ending tags with 
      awareness this is known as unterminated JSX error
      ex:
      <img src="" className="" /> the element /> is become widely important in this case 
      */}
      <img
    //   you can use the javascript varibles as the attributes of the tags like img and all 
        src={img2}
        className={c1}
      />
      <br />
      <img
        src={(img1)}
        className={c1}
      />
      <br />
      <img
        src={img3}
        className={c1}
      />
      <br />
      {/* note keep track of the self closing tags and problem arises with them  */}
    </div>
  </div>,
  document.getElementById("root")
);
