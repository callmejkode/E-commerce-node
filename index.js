const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);




// const server = http.createServer((req, res) => {
//   const url = req.url;
//   res.writeHead(200, { "Content-Type": "text/html" });
//   if (url === "/") {
    
//     res.write(homePage);
//     res.end();
//   } else if (url === "/about") {
    
//     res.write("hello about!");
//     res.end();
//   } else if (url === "/contact") {
    
//     res.write("hello contact!");
//     res.end();
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.write("Page not found");
//     res.end();
//   }
// });

// const port = 5000;
// app.listen(port, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`Server listening on ${port}`);
//   }
// });
