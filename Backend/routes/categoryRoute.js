import { Router } from "express";
import { addCategory, deleteCategory, fetchAllCategory, fetchSingleCategory, updateCategory } from "../controller/categoryController.js";
import errorHandler from "../services/catchAsyncError.js";
import { isAuthenticated, restrictTo } from "../middleware/authMiddleware.js";
const router=Router()

router.route("/").post(errorHandler(addCategory)).get(errorHandler(fetchAllCategory))
router.route("/:id").delete(errorHandler(deleteCategory)).patch(errorHandler(updateCategory))
.get(errorHandler(fetchSingleCategory))

export default  router