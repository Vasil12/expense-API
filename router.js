module.exports = (app) => {
    const expansecontroller = require("./controllers/expense.controller")
    const router = require("express").Router();

    router.route("/")
    .get(expansecontroller.get);

    router.route("/")
    .post(expansecontroller.add);

    app.use(router);
}