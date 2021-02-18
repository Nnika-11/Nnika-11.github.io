
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
