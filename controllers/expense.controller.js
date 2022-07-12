const { expense } = require("../models");
console.log(expense);
exports.get = async (req, res) => {
    try {
      const all = await expense.findAll();
      res.json(all);
    }
    catch (err) {
      res.status(422).send({answer: err});
    }
  }