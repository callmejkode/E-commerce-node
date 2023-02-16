const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT ||5000;


// sendFile will go here
app.get("/", function (req, res) {
  res.status(200);
  res.sendFile(path.resolve(__dirname, "./Header/index.html"));
});

app.get("*", (req, res) => {
  res.status(404, send("resource not found"));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server started at http://localhost:" + port);
  }
});
