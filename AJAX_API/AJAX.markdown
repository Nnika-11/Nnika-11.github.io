# JSON

**JSON.parse(data)** - data becomes a JavaScript object
```
let jsonString = '{"name":"John", "age":31, "city":"New York"}';
let jsonObj = JSON.parse(jsonString);
```

**JSON.stringify** - convert a JavaScript object into a string
``let newString = JSON.stringify(jsonObj);``

# Requests

[XMLHttpRequest](https://www.w3schools.com/xml/xml_http.asp) - (**XHR**) objects are used to interact with servers (***old***)
Doesn't support promises

[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) interface allows web browser to make HTTP requests to web servers
``fetch('request')``- returns a promise containing the HTTP response, not the actual JSON
to extract the JSON body content used method ``.json()`` - returns a promise

```
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```
