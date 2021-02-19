
// destructuring - unpack values
//Array
let myArr = [1,4,55,6,12];
const [first, second, ...theRest] = myArr;
console.log(second); //4


//Objects
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const name = person.firstName; //but you need to do it with all parameters
const {firstName,lastName, hisAge=40} = person; //naming is matter!
const {eyeColor:color} = person; //to rename param

console.log(firstName); //John
console.log(hisAge); //40
console.log(color); //blue


//function PARAMeters list
//before
function greet (user){
  return `Hello, ${user.firstName}`
}
greet(person); //"Hello, John"

//after
function greet2 ({firstName, lastName}){
  return `Hello, ${firstName} ${lastName}`
}
greet2(person); //"Hello, John Doe"

// person.map({firstName,age}=>`${firstName} is ${age} y.o.`) - if person was an array of obj
