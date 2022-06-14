const express = require("express");
const app = express();
const bodyParser = require("body-parser");   // using body-parser for getting data input

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html"); // sendFile is used to send a file at given path : __dirname gives the path to file no matter where is the file
});

// meathod to respond the post meathod
app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1+num2;
  res.send("The result is" +result);
});

// meathod for listen request from client
app.listen(3000, function () {
  console.log("Server is listening to port 3000");
});
