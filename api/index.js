require("dotenv").config();
const app = express();
const KrakenClient = require("kraken-api");
const kraken = new KrakenClient(key, secret);
