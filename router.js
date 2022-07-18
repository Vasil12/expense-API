const router = require('express').Router();
const expansecontroller = require('./controllers/expense.controller');

module.exports = (app) => {
  router.route('/')
    .get(expansecontroller.get)
    .post(expansecontroller.add);

  router.route('/:id')
    .delete(expansecontroller.remove)
    .patch(expansecontroller.updateInstance);
  app.use(router);
};
