import { Router } from "express";
import { addCategory, deleteCategory, fetchAllCategory, updateCategory } from "../controller/categoryController.js";
import errorHandler from "../services/catchAsyncError.js";
import { isAuthenticated, restrictTo } from "../middleware/authMiddleware.js";
const router=Router()

router.route("/").post(errorHandler(addCategory)).get(isAuthenticated,restrictTo('admin'),errorHandler(fetchAllCategory))
router.route("/:id").delete(errorHandler(deleteCategory)).patch(errorHandler(updateCategory))

export default  router