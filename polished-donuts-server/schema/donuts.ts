import { Schema, model } from "mongoose";


interface IDonut {
    name: string,
    background: string,
    description: string
}

const donutSchema = new Schema<IDonut>({
    name: String,
    background: String,
    description: String
});

module.exports = model("donuts", donutSchema)