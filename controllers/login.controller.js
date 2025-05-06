import { asyncWrapper } from "../utils/asyncWrapper.util.js"
import userSchema from "../models/user.model.js";
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;

const login = asyncWrapper(async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(401).json({message:" Email and Password Required"})
    }

    const userExists = await userSchema.findOne({email});

    if(userExists){
        const isMatched = await userExists.comparePassword(password);
        if(isMatched){
            const token = jwt.sign({id:userExists._id,email:userExists.email},jwtSecret,{expiresIn:'1d'});
            res.cookie('jwtToken', token, {
                httpOnly: false,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 24 * 60 * 60 * 1000,
              })
            return res.status(200).json({message:"User Logged In SuccessFully",jwtToken:token});
        }
    }

    return res.status(401).json({message:"Invalid Credentials! Check Credentials Again"})
})

const signUp = asyncWrapper (async(req,res)=>{
    const {email,password} = req.body;

    const userExists = await userSchema.findOne({email});

    if(userExists){
        return res.status(401).json({message:"User Already Registered"})
    }

    const user = new userSchema({
        email:email,
        password:password
    })

    await user.save();
    
    return res.status(200).json({message:"User created Successfully"});
})

const verifiedUser= asyncWrapper(async(req,res)=>{
    const user = req.user;
    return res.status(200).json({ message:"Authenticated User!", user: user });
})

export {login,signUp,verifiedUser}