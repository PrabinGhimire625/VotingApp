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
    //res.cookie("token", token);
    res.status(200).json({message:"User is successfully login",
        token:token,
        data:user
    })    
}

//profile
export const userProfile=async(req,res)=>{
    const id=req.user.id
    const profileData=await User.findOne({where:{id:id}})
    if(profileData){
        res.status(200).json({message:'Succcessfully fetch the user profile',data:profileData})     
    }else{
        res.status(404).json({message:"Error on fetching user profile", data:[]})
    }
}

//fetchAllUser
export const fetchAllUser=async(req,res)=>{
    const users=await User.findAll();
   if(users.length>0){
        res.status(200).json({message:'Succcessfully fetch all the users',data:users})    
    }
}

//fetchsingle user
export const fetchSingleUser=async(req,res)=>{
    const id=req.params.id
    const response=await User.findOne({where:{id:id}})
    if(response){
        res.status(200).json({message:'Successfully fetch single users',data:response})
    }
}


//delete user
export const deleteUser=async(req,res)=>{
    const id=req.params.id
    const response=await User.destroy({where:{id:id}})
    if(response){
        res.status(200).json({message:'Successfully delete the users',data:response})
    }
}

// Update user
export const updateUser = async (req, res) => {
    const { username, email, password, dob, citizenshipNumber } = req.body;
    const id = req.params.id;
  
    if (!id) {
      return res.status(400).json({ message: "ID is not provided!" });
    }
  
    try {
      const user = await User.findOne({ where: { id: id } });
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
  
      const [users] = await User.update(
        { username, email, password, dob, citizenshipNumber },
        { where: { id: id } }
      );
  
      if (users === 0) {
        return res.status(400).json({ message: "No changes made to the user data!" });
      }
  
      res.status(200).json({ message: "Successfully updated the user", data:users});
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  