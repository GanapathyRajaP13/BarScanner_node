const Tutorial = require("../../models");

exports.itemFetch = (req, res) => {
  const myFirstInput = req.query.id;

  Tutorial.itemFetch(myFirstInput, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while login tutorials.",
      });
    else res.send(data);
  });
};

exports.listItemCode = (req, res) => {
  const input = req.query.id;

  Tutorial.listItemCode(input, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while login tutorials.",
      });
    else res.send(data);
  });
};
