const { expense } = require("../models");
exports.get = async (req, res) => {
    try {
      const all = await expense.findAll();
      res.json(all);
    }
    catch (err) {
      res.status(422).send({answer: err});
    }
  }

  exports.add = async (req, res) => {
    const { shop,cost } = req.body;
    if (!shop || !cost) {
      res.status(422);
      return res.send({answer: "Shop name or price input is not defined."});
    }  
    if (cost < 0 || isNaN(cost)) {
        res.status(422);
        return res.send({answer: "Cost must be a positive number!"});
    }
    try {
      const newInstance = await expanse.create(req.body);
      return newInstance && (await this.get(req, res));
    } catch (error) {
      return res.status(422).send({ answer: error })
    }
  }