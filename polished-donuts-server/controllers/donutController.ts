const mongooseCtrl = require("mongoose");
const donuts = require("../schema/donuts");
import { Request, Response } from "express";
require("dotenv").config();

mongooseCtrl.connect(process.env.DB_STRING);

const getDonuts = async(_req: Request, res: Response) => {
    try {
        const donutsData = await donuts.find();
        res.status(200).json(donutsData);
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
}


module.exports = { getDonuts };
