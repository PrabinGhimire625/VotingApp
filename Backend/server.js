import express from "express";
import * as dotenv from "dotenv";
import sequelize from "./database/connection.js";
import User from "./database/models/userModel.js"; //compulsary
import Candidate from "./database/models/candidateModel.js";
import Vote from "./database/models/voteModel.js";

dotenv.config();
const app = express();
app.use(express.json())
app.use(express.urlencoded())

//to create the admin if not admin is available 
import adminSeeder from "./adminSeeder.js";
adminSeeder()

import userRoute from "./routes/userRoute.js"
import candidateRoute from "./routes/candidateRoutes.js"
import voteRoute from "./routes/voteRoutes.js"

app.use("/user",userRoute)
app.use("/admin/candidate",candidateRoute)
app.use("/vote",voteRoute)

//relationship between the user and candidate
User.hasMany(Candidate,{foreignKey : 'userId'})
Candidate.belongsTo(User,{foreignKey : 'userId'})

//user and vote
User.hasMany(Vote,{foreignKey:'userId'})
Vote.belongsTo(User,{foreignKey:'userId'})

//user and vote
Candidate.hasMany(Vote,{foreignKey:'candidateId'})
Vote.belongsTo(Candidate,{foreignKey:'candidateId'})



// //candidate-category
// Category.hasOne(Product,{foreignKey : 'categoryId'})
// Product.belongsTo(Category,{foreignKey:'categoryId'})
app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
});
