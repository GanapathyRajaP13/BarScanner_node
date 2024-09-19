var express = require("express");
const cors = require("cors");
const os = require("node:os");
var app = express();
var PORT = 5500;

os.hostname();
console.log(os.hostname());

app.use(
  cors({
    origin: "*",
  })
);

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
