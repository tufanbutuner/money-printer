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

const key = process.env.API_KEY;
const secret = process.env.API_PRIVATE_KEY;
const KrakenClient = require("kraken-api");
const kraken = new KrakenClient(key, secret);

(async () => {
  // Display user's balance
  console.log(await JSON.stringify(kraken.api("Balance")));

  // // Get Ticker Info
  // console.log(await kraken.api("Ticker", { pair: "XXBTZUSD" }));
})();
