// Scope - variable visibility (where the var is devined dictates where we have an access to that var )
const time = 24;
function doMiracleMorning(){
  const time = 0.5;
}
doMiracleMorning();
console.log(time); //24 - because the scope

// block scope - in condition (doesn applied for var!)
for(let i= 0;i<5;i++){
  var msg1 = "hello";
  let msg2 = "error";
}
console.log(msg1); // will work
//console.log(msg2);  // wont work



// PassFunction as param
let callTwice = function(func){ //not important here, but store func in variable
  func();
  func();
}
function rollDie(){
  const roll = Math.floor(Math.random() *6)+1;
  console.log(roll)
}
callTwice(rollDie);



//factoryFunction
function makeBetweenFunc(min, max){
  return function(num){
    return num>=min&&num<=max;
  }
}
const isChild = makeBetweenFunc(0,18);
const isAdult = makeBetweenFunc(18,100);
console.log(isChild(2));


//defineMethods - functions as properties on objects are methods: "hello".toUpperCase()
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName() {
    return this.firstName + " " + this.lastName;
  },
  sayHello (name){
    return `${this.firstName} said Hello to ${name}`
  }
};

console.log(person.sayHello("Jerico"));
