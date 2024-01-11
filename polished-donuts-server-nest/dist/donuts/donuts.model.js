"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonutSchema = void 0;
const mongoose = require("mongoose");
exports.DonutSchema = new mongoose.Schema({
    name: { type: String, required: true },
    background: { type: String, required: true },
    description: { type: String, required: true },
});
//# sourceMappingURL=donuts.model.js.map