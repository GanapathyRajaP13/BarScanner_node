const sql = require("../config/db");

const Tutorial = function (tutorial) {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
};

Tutorial.itemFetch = async (myFirstInput, result) => {
  try {
    var request = new sql.Request();

    request.query(
      "Select b.PartnerProductNo from Inventory2 as a inner join PARTNER_PRODUCT as b on a.ProductID=b.ProductID where Container=" +
        "'" +
        myFirstInput +
        "'",
      function (err, recordset) {
        if (err) console.log(err);

        result.send(recordset);
      }
    );
  } catch (error) {
    console.error("Error signing up user:", error);
    result(error, null);
  }
};

Tutorial.listItemCode = async (input, result) => {
  try {
    var request = new sql.Request();

    request.query(
      "Select * From WIP_SERIAL_NO_CONTENT where SerialNo=" + "'" + input + "'",
      function (err, recordset) {
        if (err) console.log(err);

        result.send(recordset);
      }
    );
  } catch (error) {
    console.error("Error signing up user:", error);
    result(error, null);
  }
};

module.exports = Tutorial;
