module.exports = (app) => {
    const expansecontroller = require("./controllers/expense.controller")
    const router = require("express").Router();

    router.route("/")
    .get(expansecontroller.get);

    app.use(router);
}