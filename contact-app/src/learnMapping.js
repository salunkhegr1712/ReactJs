// hello here we are seeing a part of the functional programming 
// functional programming is one which pass the function as argument/parameter to another function

// we will see mapping on Array
// we are taking a Number array here 

arr=[10,20.13,28,15,11,17,18,29,9,7]

// lets write the code for the is_odd function 

function isOdd(n){
    if( n%2===0)
        return -1
    return 1
}

// lets see hoe will input will look like 
// it will return an array of values as output 
// call back function is isOdd here 
console.log(arr.map(isOdd));

// output 
// ┌──(ghansham㉿terminal)-[~/ReactJS/contact-app/src]
// └─$ node learnMapping.js
// [
//   -1,  1, -1, 1, 1,
//    1, -1,  1, 1, 1
// ]