const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const log = `${Date.now()}:${req.url} ${req.method} you are here\n`;
    const myurl = url.parse(req.url, true);

    fs.appendFile("log.txt", log, (err, data) => {
      if (req.url == "/favicon.ico") {
        console.log(" ");
      }
      switch (myurl.pathname) {
        case "/":
          res.end("homepage");
          break;
        case "/about":
          const username = myurl.query.myname;
          res.end(`hi ${username}`);
          break;

        case "/seach":
          const search = myurl.query.search_queary;
          res.end(`your search result is here ${search}`);
          break;

        case "/signup":
          if (req.method === "GET") res.end("this is signup form");
          else if (req.method === "POST") res.end("success");
        default:
          res.end("404");
      }
    });
  })
  .listen(5000);

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(
//       JSON.stringify({ name: "muskan", email: "muskandubey184gmail.com" })
//     );
//     res.end();
//   })
//   .listen(5001);
