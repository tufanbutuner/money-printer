// require("dotenv").config();
// const express = require("express");
// const app = express();
// const port = 3000;
// const https = require("https");

// app.get("/", function (req, res, next) {
//   const url = "https://api.kraken.com/0/public/Time";
//   https.get =
//     (url,
//     function (response) {
//       console.log(response);
//     });
// });

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });

// const key = process.env.API_KEY;
// const secret = process.env.API_PRIVATE_KEY;
// const KrakenClient = require("kraken-api");
// const kraken = new KrakenClient(key, secret);

// (async () => {
//   // Display user's balance
//   console.log(await JSON.stringify(kraken.api("Balance")));

//   // // Get Ticker Info
//   // console.log(await kraken.api("Ticker", { pair: "XXBTZUSD" }));
// })();


const express = require("express");
const app = express();
const key = "5eS0Upg6jFKVhv8R9LwK2NHveTcu7NKQLUnoznxXFnv0v7eOurmiIk9n";
const privKey = "4sSykKKHPKpReg1G+Y6XUhKioHoKJw300PpKGnFz8C3NJ/PMWUdeTeXuhC9lmeh8nhMk836vQmBVRcaJHyIOWw=="
const KrakenClient = require('kraken-api');
const kraken = new KrakenClient(key, privKey);

app.get("/", function(request, response){
  (async () => {
    //display user balance
    console.log(await kraken.api('Balance'));
  
    // Get Ticker Info
    console.log(await kraken.api('Ticker', { pair : 'XXBTZUSD'}));
  })();
});



app.listen(3000, function(){
  console.log("server is running");
})