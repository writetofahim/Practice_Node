const express = require("express");
const app = express();
const userRoute = require("./routes/users.route.js");

app.use(userRoute);

app.get("/", (req, res) => {
  res.send("<h1>I am home </h1>");
});

app.use((req, res) => {
  res.send("<h1>404 not found!</h1>");
});

module.exports = app;
