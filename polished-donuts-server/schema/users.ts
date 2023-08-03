import { Schema, model } from "mongoose";


interface IUser {
    first_name: string,
    last_name: string,
    email: string,
    password: string
}

const userSchema = new Schema<IUser>({
    first_name: String,
    last_name: String,
    email: String,
    password: String
});

module.exports = model("users", userSchema)