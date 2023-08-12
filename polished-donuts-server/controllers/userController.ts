const mongooseCtrl = require("mongoose");
const users = require("../schema/users");
const bcrypt = require("bcryptjs");
import { Request, Response } from "express";
const passport = require('passport');
const JwtCookieComboStrategy = require("passport-jwt-cookiecombo");
const jwt = require("jsonwebtoken");
require("dotenv").config();

mongooseCtrl.connect("mongodb://localhost/polished-donutsdb");


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

passport.use(new JwtCookieComboStrategy({
    secretOrPublicKey: process.env.SECRET_KEY,
    jwtCookieName: 'jwt'
}, 

(payload:any, done: Function) => {
    return done(null, payload.user);
})); 

const loginUser = async(req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!req.body.email || !req.body.password) {
            return res
              .status(400)
              .send({message: "Please fill in all fields"});
            }
        
        const uniqueUser = await users!.findOne({ email: email });
        if (!uniqueUser) {
            return res.status(404).send({ message: "User doesn't exist. Please create an account." });
        }

        const checkPassword = bcrypt.compareSync(password, uniqueUser.password);
        if (!checkPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        passport.authenticate('jwt-cookiecombo', {
            session: false
        }), (req: Request, res: Response) => {
            // Create and sign json web token with the user as payload
            const token: any = jwt.sign({ user: req.body.email}, process.env.SECRET_KEY,);
            return res
                    .cookie('jwt', token, jwt.cookie)
                    .json({
                        jwt: token
                    });
                };
    } catch { 
        (error: Error) => {
            res.status(500).send({ message: "Unable to log in user", error});
        }
    }  
}

const getUsers = async(_req: Request, res: Response) => {
    try {
        const userData = await users.find();
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
}


module.exports = { getUsers, signUpUser, loginUser };
