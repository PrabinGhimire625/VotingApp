import { Router } from "express";
import { register, login, userProfile } from "../controller/userController.js";
import errorHandler from "../services/catchAsyncError.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";
const router=Router()
router.route("/register").post(errorHandler(register))
router.route("/login").post(errorHandler(login))
router.route("/profile").get(isAuthenticated,errorHandler(userProfile))  

export default router
