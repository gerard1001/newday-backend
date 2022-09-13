import express from "express";
import ClientAuth from "../../middlewares/clientMiddleware";
import {
  postComment,
  getComments,
} from "../../controllers/articleCommentController.js";

const router = express.Router();

router.post("/", ClientAuth, postComment);
router.get("/", getComments);

export default router;
