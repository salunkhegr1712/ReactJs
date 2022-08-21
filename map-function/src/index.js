import emojipedia from "./emojipedia";
var numbers = [3,56,2,48,5,67,12,17,40,36];

//Map function 
//Map -Create a new array by doing something with each item in an array.
// map do not skip any Element and passed throught all Element 
let print= (a)=>console.log(a)
numbers.map(print)

// or this is another way to declare function which we are going to use inside the map
// numbers.map(print(n){
//     console.log(a)
// })

// O/P 
// 3
// 56
// 2
// 48
// 5
// 67
// 12
// 17
// 40


// filter function and its usage 
// Filter - Create a new array by keeping the items that return true.
function isOdd(n){
    if (n%2!=0) {
        // you can pass 1 or true no issue the JS is smart enough to understand and interpret appropiate meaning
        return 1;
    }
    return 0
}

console.log(numbers.filter(isOdd))

// another way to use the filter function 
// console.log(numbers.filter(function isOdd(){
//     if (n%2!=0) {
//         // you can pass 1 or true no issue the JS is smart enough to understand and interpret appropiate meaning
//         return 1;
//     }
//     return 0
// }));
// O/P 
// (4) [3, 5, 67, 17]

//Reduce - Accumulate a value by doing something to each item in an array.
// it has two parameters which are accumaltor and second is currentval
// this will return single value as o/p

let c=numbers.reduce((accum,currentval)=>{
    return accum+currentval
})
console.log(c) //286
//Find - find the first item that matches from an array.
// it is just like count
console.log(numbers.includes(17)) //return true or false value

// find will as soon as the first value found successfulley 
console.log(numbers.find(n=>{
    if (n>10)
        return n
}))

// findIndex will as soon as the first value found successfulley then it will return index of that value 
console.log(numbers.findIndex(n=>{
    if(n===17)
        return n
}))

// give index of value within array 
console.log(numbers.indexOf(17))
//FindIndex - find the index of the first item that matches.
// is like index in python 

// using map function such that the meaning string dont have characters more than 100 
// for that we will use the map function as it will affects all the Elements inside the array
let d=emojipedia.map(a => a.meaning.slice(0,100))
    // as i have single line return so im using arrow function in above manner 
console.log(d)