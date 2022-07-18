const router = require('express').Router();
const expansecontroller = require('./controllers/expense.controller');

module.exports = (app) => {
  router.route('/').get(expansecontroller.get);
  router.route('/').post(expansecontroller.add);
  router.route('/:id').delete(expansecontroller.remove);
  app.use(router);
};
