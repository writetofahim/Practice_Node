const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("I am running");
});
app.post("/register", (req, res) => {
  res.send("I am from register");
});
app.get("/login", (req, res) => {
  res.send("I am from login");
});

module.exports = app;
