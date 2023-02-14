const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hello world!");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hello about!");
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hello contact!");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("Page not found");
    res.end();
  }
});
const port = 5000;
server.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on ${port}`);
  }
});
