module.exports = (app) => {
    const expansecontroller = require("./controllers/expense.controller")
    const router = require("express").Router();

    router.route("/")
    .post(expansecontroller.add);
    
    router.route("/")
    .get(expansecontroller.get);

    app.use("/", router);
};
