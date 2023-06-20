const app = require("./app");

const port = 3000;
const hostname = "127.0.0.1";

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
