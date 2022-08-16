import express from "express";
import ClientAuth from "../../middlewares/clientMiddleware";
import {postComment} from "../../controllers/articleCommentController.js"

const router = express.Router();

router.post("/", ClientAuth, postComment);

export default router;
