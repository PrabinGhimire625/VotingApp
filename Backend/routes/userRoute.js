import { Router } from "express";
import { register, login, userProfile, fetchAllUser, fetchSingleUser, deleteUser, updateUser } from "../controller/userController.js";
import errorHandler from "../services/catchAsyncError.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";
const router=Router()
router.route("/register").post(errorHandler(register))
router.route("/login").post(errorHandler(login))
router.route("/profile").get(isAuthenticated,errorHandler(userProfile))  
router.route("/").get(errorHandler(fetchAllUser))  
router.route("/:id").get(errorHandler(fetchSingleUser))  
.delete(errorHandler(deleteUser))
.patch(errorHandler(updateUser))

export default router
