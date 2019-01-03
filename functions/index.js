const functions = require("firebase-functions");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// app.get("/timestamp", (req, res) => {
//   res.send(`${Date.now()}`);
// });

// app.get("/timestamp-cached", (req, res) => {
//   res.set("Cache-Control", "public, max-age=300, s-maxage=600");
//   res.send(`${Date.now()}`);
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger("dev"));

app.get("/home", (req, res) => {
  res.send(`Hello from express app inside firebase cloud functions`);
});

exports.app = functions.https.onRequest(app);
