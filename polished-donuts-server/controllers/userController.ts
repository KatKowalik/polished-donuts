const mongooseCtrl = require("mongoose");
const users = require("../schema/users");
const bcrypt = require("bcryptjs");
import { NextFunction, Request, Response } from "express";
const passport = require('passport');
const JwtCookieComboStrategy = require("passport-jwt-cookiecombo");
const jwt = require("jsonwebtoken");
require("dotenv").config();

mongooseCtrl.connect(process.env.DB_STRING);


const signUpUser = async(req: Request, res: Response) => {
    try {
        const { first_name, last_name, email, password } = req.body;
        if (!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.password) {
            return res
              .status(400)
              .send({message: "Please fill in all fields"});
            }

        const uniqueEmail = await users.findOne({ email: email });
        if (uniqueEmail) {
            return res.status(404).send({ message: "User already exists" });
        }
 
        const encryptedPassword =  await bcrypt.hashSync(password, 10)
    
        const newUser = {
            first_name,
            last_name,
            email,
            password: encryptedPassword,
        }
        console.log(newUser);
        
        await users.create(newUser);
        res.status(201).json({message: "User created successfully."})

    } catch {
        (error: Error) => {
        res.status(500).json({ message: "Unable to create new user", error });
        }}
}

const loginUser = (req: Request, res: Response) => {
    const { email } = req.body
    jwt.sign({ user: email }, process.env.SECRET_KEY, (err: Error, token: any) => {
        if (err) return res.json(err);

        // Send Set-Cookie header
        res.cookie('jwt', token, {
            httpOnly: true,
            sameSite: true,
            signed: true,
            secure: true
        });

        // Return json web token
        return res.json({
            jwt: token
        });

}
    )};

const getUsers = async(_req: Request, res: Response) => {
    try {
        const userData = await users.find();
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
}


module.exports = { getUsers, signUpUser, loginUser };
