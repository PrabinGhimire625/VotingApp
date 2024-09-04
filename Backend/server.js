import express from "express";
import * as dotenv from "dotenv";
import sequelize from "./database/connection.js";
import User from "./database/models/userModel.js"; //compulsary
import Candidate from "./database/models/candidateModel.js";
import Vote from "./database/models/voteModel.js";
import Category from "./database/models/CategoryModel.js";
import Party from "./database/models/partyModel.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("./storage"))

//connect backend and frontend
app.use(cors({
    origin:'*'
}))

//to create the admin if not admin is available 
import adminSeeder from "./adminSeeder.js";
seedCategory()

adminSeeder()

import userRoute from "./routes/userRoute.js"
import candidateRoute from "./routes/candidateRoutes.js"
import voteRoute from "./routes/voteRoutes.js"
import categoryRoute from "./routes/categoryRoute.js"
import partyRoute from "./routes/partyRoutes.js"
import { seedCategory } from "./controller/categoryController.js";

app.use("/user",userRoute)
app.use("/admin/candidate",candidateRoute)
app.use("/admin/category",categoryRoute)
app.use("/admin/party",partyRoute)
app.use("/user/vote",voteRoute)



//relationship between the user and candidate
User.hasMany(Candidate,{foreignKey : 'userId'})
Candidate.belongsTo(User,{foreignKey : 'userId'})

//party and candidate
Party.hasMany(Candidate,{foreignKey : 'partyId'})
Candidate.belongsTo(Party,{foreignKey : 'partyId'})


//user and vote
User.hasMany(Vote,{foreignKey:'userId'})
Vote.belongsTo(User,{foreignKey:'userId'})

//user and vote
Candidate.hasMany(Vote,{foreignKey:'candidateId'})
Vote.belongsTo(Candidate,{foreignKey:'candidateId'})


// //candidate-category
Category.hasOne(Candidate,{foreignKey : 'categoryId'})
Candidate.belongsTo(Category,{foreignKey:'categoryId'})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
});
