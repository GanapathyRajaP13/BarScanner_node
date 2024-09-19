var mySQL = require("mysql2");
const dbConfig = require("./db.config");

mySQL.connect(dbConfig, function (err) {
  if (err) console.log(err);
  if (!err) console.log("Connection Established Successfully");
});


module.exports = mySQL;