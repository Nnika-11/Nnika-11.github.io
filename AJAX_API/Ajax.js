let json = {
  "ticker": {
    "base": "BTC",
    "target": "USD",
    "price": "443.7807865468",
    "volume": "31720.1493969300",
    "change": "0.3766203596"
  },
  "timestamp": 1399490941,
  "success": true,
  "error": ""
};


// JSON.parse(data) - data becomes a JavaScript object
let jsonString = '{"name":"John", "age":31, "city":"New York"}';
let jsonObj = JSON.parse(jsonString);

//Convert a JavaScript object into a string
let newString = JSON.stringify(jsonObj);

// Fetch

(async () => {
  let response = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
  let jsonBody = await response.json();
  console.log("price for BTC is " + jsonBody.ticker.price);
})();

//Axios

(() => {
  axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(result => console.log("Price for BTC is " + result.data.ticker.price))
})();


(() => {
  const header = {
    headers: {
      Accept: 'application/json'
    }
  };
  axios.get('https://icanhazdadjoke.com/', header)
    .then(result => document.getElementById("joke").innerText = result.data.joke)
    .catch(error => alert("no jokes available. Sorry"))
})();
