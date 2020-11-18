// CallBack - JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "capacity": 5
  },
  {
    "color": "blue",
    "type": "sedan",
    "capacity": 5
  },
]

cars.forEach(function(car){
    console.log(car.color)
});


// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const cars2 = cars.map(function(car){
  return "We have " +car.type;
});



//remember the arrow functions instead function expressiom
const cars3 = cars.map(car => {
  return "We have " +car.type;
});

//use implicit returns - without return key word
//if return 1 thing chnge curly braces to parenthesis
const cars4 = cars.map(car => (
  "We have " +car.type
));
//or without
const cars5 = cars.map(car => "We have " +car.type);

// Filter - creates a new array with all elements that pass the test implemented by the provided function
const result = cars.filter(car => car.capacity > 5).map(car => car.type);

//every -  tests whether all elements in the array pass the test implemented by the provided function
//some() method tests whether at least one element
console.log(cars.every(car => car.type&&car.capacity&&car.color)) ;

// reduce(accumulator, currentVal) - executes a reducer function on each element of the array, resulting in single output value.

const sixFactorial = [2,3,4,5,6].reduce((accumulator,currentVal)=>{
  return accumulator*currentVal;
})

var minValue = (min, cur) => min<cur ? min:cur;
console.log([2,3,4,-1,5,6].reduce(minValue));
console.log([2,3,4,-1,6,7].reduce(minValue,-8)); //add new val to score

//setTimeout(CallBack, millisec))
setTimeout(() => console.log("hello!"),3000);

// setInterval(() => console.log(Math.random()),3000);
// want to stop interval? - assign it to var
// const id = setInterval(() => console.log(Math.random()),3000);
//to stop:   clearInterval(id)


//every
