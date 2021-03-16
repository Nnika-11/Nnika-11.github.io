***The JavaScript engine***  (in a hosting environment (browser)) is a single-threaded interpreter comprising of a heap and a single call stack.
The browser provides web APIs like the DOM, AJAX, and Timers.

***Call Stack*** is a mechanism for an interpreter to keep track of its place in a script *(ex. bookmark)*
that calls multiple functions — what function is currently being run and what functions are called from within that function.

The call stack is primarily used for function invocation (call). **LIFO**

The term ***asynchronous*** refers to two or more objects or events not existing or happening at the same time (or multiple related things happening without waiting for the previous one to complete).

JS is **Single Threaded**, but browser itself with Web APIs getting take cares for making requests. Once it's done it's pushed back obto the stack as call back.

#Callback & Promise

***A callback*** is a function passed as an argument to another function. (possible to have many of them)

```
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
  }
```

The ***Promise object*** represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
like make a request from any API etc.

```
const makeFakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    timer = Math.floor(Math.random() * 4);
    if (timer > 1) resolve(`Data from ${url}`);
    else reject("Connection timout");
  });
};

makeFakeRequest("mySite/home")
  .then(data => {
    console.log(data);
    return makeFakeRequest("mySite/page2");
  })
  .then(() => {
    console.log("page 2 proceed");
    return makeFakeRequest("mySite/page3");
  })

```
#Async & Await

The keyword ***async*** before a function makes the function return a promise
The keyword ***await*** before a function makes the function wait for a promise

setTimeout doesnt work with async - use `await new Promise(resolve => setTimeout(resolve, time));`

```
const makeFakeRequest = async (url) => {
  let wait = Math.floor(Math.random() * 5);
  await new Promise(resolve => setTimeout(resolve, wait * 500));
  if (wait > 1)
    console.log("Data from " + url);
  else
    throw ("Error at " + url);
}

(async () => {
  try {
    await makeFakeRequest("myWebSite.com/homePage");
    await makeFakeRequest("myWebSite.com/page2");
    await makeFakeRequest("myWebSite.com/page3");
  } catch (e) {
    console.log(e);
  }
})();
```
