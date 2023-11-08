const express = require("express");
const app = express();
const path = require("path");
const PORT = 8001;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/IntroComp/:tab", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/Product/:tab", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/Technology/:tab", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/Nalgaem", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/Mozaic", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
