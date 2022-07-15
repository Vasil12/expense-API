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
    const arrayOfErrors = [];
    const { shop,cost } = req.body;
    
    if (!shop && !cost) {
      return res.status(422).send({answer: "Shop name and cost input is not defined."});
    }  
    if (cost < 0 || isNaN(cost)) {
        arryaOfError.push("Cost must be a positive number!");
    }
    if(!shop){
      arrayOfErrors.push("Your entered shop is undefined");
    }
    if(arrayOfErrors.length) {
      return res.status(422).send({ answer: arrayOfErrors })
    }
    try {
      const newInstance = await expanse.create(req.body);
      return newInstance && (await this.get(req, res));
    } catch (error) {
      return res.status(422).send({ answer: error })
    }
  }

  exports.remove = async (req, res) => {
    const { id } = req.params;
    if (!id.trim()) {
      res.status(422).send({ answer: "invalid id" });
    }
    try {
      const remove = await expense.destroy({ where: { id } });
      if (remove) return await exports.get(req, res);
      return res.status(404).send({ answer: "Row not found" });
    } catch (error) {
      return res.status(422).send({ answer: error });
    }
  };