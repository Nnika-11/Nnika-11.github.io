***The JavaScript engine***  (in a hosting environment (browser)) is a single-threaded interpreter comprising of a heap and a single call stack.
The browser provides web APIs like the DOM, AJAX, and Timers.

***Call Stack*** is a mechanism for an interpreter to keep track of its place in a script *(ex. bookmark)*
that calls multiple functions — what function is currently being run and what functions are called from within that function.

The call stack is primarily used for function invocation (call). **LIFO**

The term ***asynchronous*** refers to two or more objects or events not existing or happening at the same time (or multiple related things happening without waiting for the previous one to complete).

JS is **Single Threaded**, but browser itself with Web APIs getting take cares for making requests. Once it's done it's pushed back obto the stack as call back.

***A callback*** is a function passed as an argument to another function. (possible to have many of them)

The ***Promise object*** represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
like make a request from any API etc.
