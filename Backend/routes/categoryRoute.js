import { Router } from "express";
import { addCategory, deleteCategory, fetchAllCategory, updateCategory } from "../controller/categoryController.js";
import errorHandler from "../services/catchAsyncError.js";
const router=Router()

router.route("/").post(errorHandler(addCategory)).get(errorHandler(fetchAllCategory))
router.route("/:id").delete(errorHandler(deleteCategory)).patch(errorHandler(updateCategory))

export default  router