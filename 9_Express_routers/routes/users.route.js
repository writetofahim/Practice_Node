const express = require("express");
const route = express.Router();

route.get("/register", (req, res) => {
  res.send("<h1>I got get req from register</h1>");
});
route.get("/login", (req, res) => {
  res.send("<h1>I got get req from login</h1>");
});

module.exports = route;
