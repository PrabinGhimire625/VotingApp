import User from "../database/models/userModel.js"
import bcrypt from "bcrypt"
import jwt from  "jsonwebtoken"
import dotenv from  "dotenv"
dotenv.config()

//register user
export const register=async(req,res)=>{
    const  {username, email, password,  dob, citizenshipNumber,role,isVoted}=req.body
    const hashedPassword= await bcrypt.hash(password,10)
    const user=await User.create({username, email, password:hashedPassword,  dob, citizenshipNumber, role,isVoted})
    res.status(200).json({message : "User is successfully created",data:user})
}

//login
export const login=async(req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({where:{email:email}})
    if(!user){
       return res.status(404).json({message:"User not found of that email"})
    }
    const isMatched=await bcrypt.compare(password, user.password)
    if(!isMatched){
        res.status(403).json({message:"Password is not valid "})
        return
    }
    const token=jwt.sign({id:user.id}, process.env.SECRET_KEY, {expiresIn:"5h"});
    res.cookie("token", token);
    res.status(200).json({message:"User is successfully login",data:token})    
}

//profile
export const userProfile=async(req,res)=>{
    const id=req.user.id
    console.log(id)
    if(!id){
        res.status(200).json({message: "Email of that user is not found"})
    }else{
        const profileData=await User.findOne({where:{id:id}})
    res.status(200).json({message:'Succcessfully fetch the user profile',data:profileData})     
    }
}
