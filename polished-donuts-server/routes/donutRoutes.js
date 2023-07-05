const router = require("express").Router();
const donutController = require("../controllers/controller");

router.route("/donuts").get(donutController.getDonuts);


module.exports = router;