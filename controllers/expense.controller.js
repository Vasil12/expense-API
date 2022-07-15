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
    const arrayOfErrors =[];
    const { shop,cost } = req.body;
    if (!shop && !cost) {
      res.status(422);
      return res.send({answer: "Shop name and cost input is not defined."});
    }  
    if (cost < 0 || isNaN(cost)) {
        res.status(422);
        arryaOfError.push("Cost must be a positive number!");
    }
    if(!shop){
      res.status(422);
      arrayOfErrors.push("Your entered shop is undefined");
    }
    try {
      const newInstance = await expanse.create(req.body);
      return newInstance && (await this.get(req, res));
    } catch (error) {
      return res.status(422).send({ answer: arr })
    }
  }