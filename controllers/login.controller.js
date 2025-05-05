import { asyncWrapper } from "../utils/asyncWrapper.util.js"
import userSchema from "../models/user.model.js";

const login = asyncWrapper(async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(401).json({message:" Email and Password Required"})
    }

    const userExists = await userSchema.findOne({email});

    if(userExists){
        const isMatched = await userExists.comparePassword(password);
        if(isMatched){
            return res.status(200).json({message:"User Logged In SuccessFully"});
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

export {login,signUp}