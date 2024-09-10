import { Router } from "express";
import { isAuthenticated, restrictTo } from "../middleware/authMiddleware.js";
import errorHandler from "../services/catchAsyncError.js";
import { createCandidate, deleteCandidate, fetchAllCandidate, fetchCandidatesByCategory, fetchCandidatesByParty, fetchSingleCandidate, updateCandidate } from "../controller/candidateController.js";

import {multer,storage} from "../middleware/multerMiddleware.js"
const upload = multer({storage : storage})
const router=Router()

router.route("/").post(isAuthenticated,restrictTo('admin'),upload.single('image'),errorHandler(createCandidate))
.get(isAuthenticated,restrictTo('admin'),errorHandler(fetchAllCandidate))

router.route("/:id").
get(errorHandler(fetchSingleCandidate))
.delete(isAuthenticated,restrictTo('admin'),errorHandler(deleteCandidate))
.patch(isAuthenticated,restrictTo('admin'),upload.single('image'),errorHandler(updateCandidate))

//fetch candidate based on the party
router.route("/party/:partyId").get(errorHandler(fetchCandidatesByParty))

//fetch candidate based on the category
router.route("/category/:categoryId").get(errorHandler(fetchCandidatesByCategory))


export default router