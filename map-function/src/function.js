// we are discusing the ways of declaring function inside the javascript 

// declaring function with there name and can be called at any instant 

function xyz(a,b,c){
    return a+b+c;
}

let f= function(a,b,c){
    
    c=30
    return a+b+c;
}
// declaring function with arrow operation  
// here you dont have write function keyword 
// for multiple parametric function the brackets are must 
let d=(a,b,c) =>{
    return a+b+c;
}
// it is => no space should be there between the symbols and that symbol is arrow symbol
// and also known as fat arrow 

console.log(xyz(10,20,30));
console.log(f(10,20,30));
console.log(d(10,20,30));

// Output :
// 60
// 60
// 60
   