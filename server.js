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

var sql = require("mysql2");

// config for your database
var config = {
  user: "root",
  password: "ganapa@13",
  host: "localhost",
  port: 3306,
  database: "scanData",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

sql.connect(config, function (err) {
  if (err) console.log(err);
  if (!err) console.log("Connection Established Successfully");
});

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});

app.post("/getItemCode", function (req, res) {
  var myFirstInput = req.query.id;
  var request = new sql.Request();

  request.query(
    "Select b.PartnerProductNo from Inventory2 as a inner join PARTNER_PRODUCT as b on a.ProductID=b.ProductID where Container=" +
      "'" +
      myFirstInput +
      "'",
    function (err, recordset) {
      if (err) console.log(err);

      res.send(recordset);
    }
  );
});

app.post("/getItemCodeforTata", function (req, res) {
  var Input = req.query.id;
  var request = new sql.Request();

  request.query(
    "Select * From WIP_SERIAL_NO_CONTENT where SerialNo=" + "'" + Input + "'",
    function (err, recordset) {
      if (err) console.log(err);

      res.send(recordset);
    }
  );
});
