const express = require("express");
const app = express();
const userRoute = require("./routes/users.route.js");

// if specified route
app.use("/api/user", userRoute);

// if root route
app.get("/", (req, res) => {
  res.send("<h1>I am home </h1>");
});

// if unknown route
app.use((req, res) => {
  res.send("<h1>404 not found!</h1>");
});

module.exports = app;
