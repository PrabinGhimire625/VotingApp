import { Router } from "express";
import { isAuthenticated, restrictTo } from "../middleware/authMiddleware.js";
import errorHandler from "../services/catchAsyncError.js";
import { addVote, countVote } from "../controller/voteController.js";
const router=Router();

router.route("/:candidateId").post(isAuthenticated,restrictTo("user"), errorHandler(addVote))
router.route("/count").get(errorHandler(countVote))


export default router