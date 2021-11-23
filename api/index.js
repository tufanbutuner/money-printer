const express = require("express");
const app = express();
const key = process.env.API_KEY;
const privKey = process.env.API_PRIVATE_KEY;
const KrakenClient = require("kraken-api");
const kraken = new KrakenClient(key, privKey);

app.get("/", function (request, response) {
  (async () => {
    //display user balance
    console.log(await kraken.api("Balance"));

    // Get Ticker Info
    console.log(await kraken.api("Ticker", { pair: "XXBTZUSD" }));
  })();
});

app.listen(3000, function () {
  console.log("server is running");
});
