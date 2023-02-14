const http = require("http");
const {readFileSync} = require('fs');

const homePage = readFileSync('./Header/index.html');


const server = http.createServer((req, res) => {
  const url = req.url;
  res.writeHead(200, { "Content-Type": "text/html" });
  if (url === "/") {
    
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    
    res.write("hello about!");
    res.end();
  } else if (url === "/contact") {
    
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
