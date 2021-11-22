require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const https = require("https");

app.get("/", function (req, res, next) {
  const url = "https://api.kraken.com/0/public/Time";
  https.get =
    (url,
    function (response) {
      console.log(response);
    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
