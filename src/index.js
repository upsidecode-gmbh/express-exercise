const items = require("./data.js");
const bp = require("body-parser");
const express = require("express");
const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// EXAMPLE
app.get("/", function (req, res) {
  res.send([{ id: 1, name: "Bread", price: 2.0 }]);
});

module.exports = app;
