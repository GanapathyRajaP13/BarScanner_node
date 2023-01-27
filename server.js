var express = require('express');
const cors = require("cors");
const os = require('node:os');
var app = express();
var PORT = 5500;
os.hostname();
console.log(os.hostname())
app.use(
    cors({
      origin: "*",
    })
  );
var sql = require("mssql");


// config for your database
var config = {
    user: 'FlxAdmin',
    password: 'FlxAdmin',
    server: 'CHEMSODS01',
    database: 'Apriso_2021',
    trustServerCertificate: true
};
sql.connect(config, function (err) {
    if (err) console.log(err);
    if (!err) console.log('Connection Established Successfully');
})

var server = app.listen(PORT,"", function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});


app.post('/getItemCode', function (req, res) {
    var myFirstInput = req.query.id;
    var request = new sql.Request();

    request.query('Select b.PartnerProductNo from Inventory2 as a inner join PARTNER_PRODUCT as b on a.ProductID=b.ProductID where Container=' + '\'' + myFirstInput + '\'', function (err, recordset) {

        if (err) console.log(err)

        res.send(recordset);

    });
});

app.post('/getItemCodeforTata', function (req, res) {
    var Input = req.query.id;
    var request = new sql.Request();

    request.query('Select * From WIP_SERIAL_NO_CONTENT where SerialNo=' + '\'' + Input + '\'', function (err, recordset) {

        if (err) console.log(err)

        res.send(recordset);

    });
});



