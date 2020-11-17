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
const cars3 = cars.map(car => (
  "We have " +car.type;
));
//or without
const cars4 = cars.map(car => "We have " +car.type);
