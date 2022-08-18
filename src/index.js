// in this module we will learn how to style the jsx files with use of jsx in javaScript

import react from "react";
import React from "react";
import reactDom from "react-dom";

reactDom.render(
    // so class is name which is specified in the html but not supported in html but we 
    // are using JSX so we have use the name convections according to the  javascript
    // as you also know that the javascript uses the camelCasing while html not use plzz reffer the txt
    // file in react folder of laptop  
    // ex: contenteditable in HTML but contentEditable in js
<h1 className="head" contentEditable="true" spellCheck="false">
    {/* if you enable contentEditable so you can make changes inside the tags which you provided  */}
    {/* spellcheck will check for the  typos   */}
    Hello Ghansham Here   
</h1>,
document.getElementById("root"))
