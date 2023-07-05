const mongoose = require("mongoose");


const donutSchema = new mongoose.Schema({
    name: String,
    background: String,
    description: String
});

module.exports = mongoose.model("donuts", donutSchema)