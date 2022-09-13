import express from "express";
import { createReply } from "../../controllers/articleCommentController.js";
import ClientAuth from "../../middlewares/clientMiddleware.js";

const router = express.Router();

router.post("/", ClientAuth, createReply);

export default router;
