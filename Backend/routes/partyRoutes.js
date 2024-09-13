import { Router} from "express";
import {multer,storage} from "../middleware/multerMiddleware.js"
import { addParty, deleteParty, fetchAllparty, fetchSingleParty, updateParty } from "../controller/partyController.js";
import { isAuthenticated, restrictTo } from "../middleware/authMiddleware.js";
import errorHandler from "../services/catchAsyncError.js";

const upload = multer({storage : storage})
const router=Router()
router.route("/").post(isAuthenticated,restrictTo('admin'),upload.single('image'),errorHandler(addParty))
.get(errorHandler(fetchAllparty))


router.route("/:id")
.get(errorHandler(fetchSingleParty))
.delete(isAuthenticated,restrictTo('admin'),errorHandler(deleteParty))
.patch(isAuthenticated,restrictTo('admin'),upload.single('image'),errorHandler(updateParty))

export default router