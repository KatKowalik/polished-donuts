const mongoose = require("mongoose");
const donuts = require("../schema/donuts")
mongoose.connect("mongodb://localhost/polished-donutsdb");

const getDonuts = async(req, res) => {
    try {
        const donutsData = await donuts.find();
        res.status(200).json(donutsData);
    } catch (e) {
        res.status(500).send(e.message);
    }
}


module.exports = { getDonuts };
