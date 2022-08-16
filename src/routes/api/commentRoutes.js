import express from "express";
import {
  createComment,
} from "../../controllers/commentController.js";
import ClientAuth from "../../middlewares/clientMiddleware.js";

const router = express.Router();

router.post("/", ClientAuth, createComment);

export default router;
