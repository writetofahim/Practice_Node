const http = require("http");
const fs = require("fs");
const { encode } = require("punycode");

const PORT = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const pageReader = (file, statusCode) => {
    fs.readFile(file, (err, data) => {
      res.writeHead(statusCode, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    pageReader("./html/index.html", 200);
  } else if (req.url === "/about") {
    pageReader("./html/about.html", 200);
  } else if (req.url === "/contact") {
    pageReader("./html/contact.html", 200);
  } else {
    pageReader("./html/error.html", 404);
  }
});

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile("./html/index.html", (err, data) => {
//       res.writeHead(200, { "Content-type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   } else if (req.url === "/about") {
//     fs.readFile("./html/about.html", (err, data) => {
//       res.writeHead(200, { "Content-type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   } else if (req.url === "/contact") {
//     fs.readFile("./html/contact.html", (err, data) => {
//       res.writeHead(200, { "Content-type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   } else {
//     fs.readFile("./html/error.html", (err, data) => {
//       res.writeHead(404, { "Content-type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   }
// });

server.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`);
});
