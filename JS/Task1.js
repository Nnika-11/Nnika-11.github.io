// You have array with different data types. Write a function that concatenate all sub-array elements into original array, without touching elements of other types.
//
// HINT:  polyfill  of flat()

// flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]);
// куегкт
//      [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]


//simple idea
function flatten(list) {

  var list2 = list2 || [];
  for (const el of list) {
    if (Array.isArray(el)) {
      list2 = list2.concat(flatten(el));
    } else {
      list2.push(el);
    }
  }
  return list2;
}


function flatten1(list) {
  return list.reduce(
    (arr, el) =>
    Array.isArray(el) ?
    arr.concat(flatten1(el)) :
    arr.concat(el), []
  )
}


function get(obj, path, defaultValue) {
  var res = path.split(".");
  for (const el of res) {
    if(obj[el])
    obj = obj[el]
    else return defaultValue
  }
  return obj

}

const obj = {
  a: {
    b: {
      c: 'd'
    },
    e: 'f'
  }
};

console.log(get(obj, 'a.b')); // { c : 'd' }
console.log(get(obj, 'a.b.c')); // 'd'
get(obj, 'a.e');   // 'f'
console.log(get(obj, 'a.x.e')); // undefined
console.log(get(obj, 'a.x.e', true)); // true
get(obj, 'a.x.e', 'My default value'); // My default value
