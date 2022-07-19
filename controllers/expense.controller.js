const { expense } = require('../models');

const {
  expense,
} = require('../models');

exports.get = async (req, res) => {
  try {
    const all = await expense.findAll();
    res.json(all);
  } catch (err) {
    res.status(422).send({ answer: err });
  }
};

exports.add = async (req, res) => {
  const arrayOfErrors = [];
  const { shop, cost } = req.body;
  if (!shop && !cost) {
    return res.status(422).send({ answer: 'Shop name and cost input is not defined.' });
  }

  if (cost < 0 || Number.isNaN(cost)) {
    arrayOfErrors.push('Cost must be a positive number!');
  }
  if (!shop) {
    arrayOfErrors.push('Your entered shop is undefined');
  }
  if (arrayOfErrors.length) {
    return res.status(422).send({ answer: arrayOfErrors });
  }
  try {
    const newInstance = await expense.create(req.body);
    return newInstance && (await this.get(req, res));
  } catch (error) {
    return res.status(422).send({ answer: error });
  }
};
exports.remove = async (req, res) => {
  const { id } = req.params;
  if (!id.trim()) {
    res.status(422).send({ answer: 'invalid id' });
  }
  try {
    const remove = await expense.destroy({ where: { id } });
    if (remove) return await exports.get(req, res);
    return res.status(404).send({ answer: 'Row not found' });
  } catch (error) {
    return res.status(422).send({ answer: error });
  }
};

exports.updateInstance = async (req, res) => {
  const { id } = req.params;
  const { shop, cost } = req.body;
  const arrayOfErrors = [];
  const valueKeys = {};

  if (id) {
    if (!shop && !cost) {
      return res.status(422).send({ answer: ' Please define at least one input!.' });
    }
    if (cost) {
      if (cost < 0 || Number.isNaN(cost)) {
        arrayOfErrors.push('Cost must be a positive number !');
      } else {
        valueKeys.cost = cost;
      }
    }
    if (shop) {
      if (!shop.trim()) arrayOfErrors.push(' Shop name cannot be empty !.');
      else valueKeys.shop = shop;
    }

    if (arrayOfErrors.length) {
      return res.status(422).send({ answer: arrayOfErrors });
    }

    try {
      const [result] = await expense.update(valueKeys, {
        where: { id },
      });
      if (result === 1) {
        return await this.get(req, res);
      }
      return res.status(404).send({ answer: 'Instance not found.' });
    } catch (error) {
      return res.status(422).send({ answer: error });
    }
  } else {
    return res.status(422).send('Invalid ID');
  }
};
