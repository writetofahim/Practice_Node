const app = require("./app");

const port = 3000;
const hostName = "127.0.0.1";

app.use((req, res) => {
  res.send("<h1>404 not found!</h1>");
});

app.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
