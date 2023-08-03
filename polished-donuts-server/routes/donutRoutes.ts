const donutRouter = require("express").Router();
const donutController = require("../controllers/donutController");

donutRouter.route("/donuts").get(donutController.getDonuts);


module.exports = donutRouter;