const donutRouter = require("express").Router();
const donutController = require("../controllers/donutController");

donutRouter.route("/").get(donutController.getDonuts);


module.exports = donutRouter;