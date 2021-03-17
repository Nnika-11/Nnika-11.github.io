

let json = {"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""};


// JSON.parse(data) - data becomes a JavaScript object
let jsonString = '{"name":"John", "age":31, "city":"New York"}';
let jsonObj = JSON.parse(jsonString);

//Convert a JavaScript object into a string
let newString = JSON.stringify(jsonObj);

//URL: /search/shows?q=:query : - means API need some i from you
//q=:query - query string
//Example: http://api.tvmaze.com/search/shows?q=girls&embed=episodes


// Fetch

(async ()=>{
  let response = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
  let jsonBody = await response.json();
  console.log("price for BTC is " + jsonBody.ticker.price);
})();
