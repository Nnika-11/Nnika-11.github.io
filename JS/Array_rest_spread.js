
// Default Parameters
//add to one of param equal sign and default minValue

let rollDice = (sidesNum = 6) =>
   Math.floor(Math.random() * sidesNum)+1;
// the order is important, so default params go first in functions!


// SPREAD
//spread - allows an iterable/obj etc to be expanded
//separete to an arguments/obj/elements
//... - syntax
let someArr = [3,4,6,77,8,1];
Math.min(someArr) //return Nan (it needs nore then 1 arg)
Math.min(...someArr)  //return min - 1 (because array was spreaded)

//concatenate
let bigArr = [...someArr,...'array']   //[3, 4, 6, 77, 8, 1, "a", "r", "r", "a", "y"]

//obj
let Dog = {name: "Blacky", color: "black", breed:"none"}
let Cat = {name : "Whita",color: "white"}
//if here is a conflict - wins the last arg
let DogCat = {...Dog,...Cat} //{name: "Whita", color: "white", breed: "none"}
let CatDog = {...Cat,...Dog} // {name: "Blacky", color: "black", breed: "none"}
//obj from array - index is a key
let ObjArr = {...someArr}  // {0: 3, 1: 4, 2: 6, 3: 77, 4: 8, 5: 1}


//REST
// used in
//The arguments object - a local variable available within all non-arrow functions.
 // You can refer to a function's arguments inside that function by using its arguments object.
 //  It has entries for each argument the function was called with, with the first entry's index at 0.

//The arguments object is not dependent on how many parameters you assigned to the function;
 // all arguments passed when the function is called will be taken into account and saved in it.

// arguments object acts like  “Array-like” object  -  arguments has a length property and properties indexed from zero,
// but it doesn't have Array's built-in methods (forEach() or map())
//agument object:
function sumAll(){ //not cpecify how many params will be passed it saved in arguments
  // let ar = arguments.reduce((sum, currentVal)=>sum+currentVal)    -   will not work as it array like!
  return [...arguments].reduce((sum, currentVal)=>sum+currentVal)
}
sumAll(1,3,4,6) // result is 14

//now use REST - same sytax ...
function multyAll(...nums){ //if just nums - it required 1 param, but that transfer arguments to an array
  return nums.reduce((mult, currentVal)=>mult*currentVal)
}
multyAll(1,3,4,6) // result is 72

function toDo(top1,top2,...rest){
  console.log(`you did it: ${top1}`);
  console.log(`you did it: ${top2}`);
  console.log(`you managed to finished that too ${rest}`);
}

toDo("found a place to live","got the job","run 10 km", "drink 2L water")
// you did it: found a place to live
// Array_rest_spread.js:57 you did it: got the job
// Array_rest_spread.js:58 you managed to finished that too run 10 km,drink 2L water
