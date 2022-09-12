import express from "express";
import upload from "../../helpers/multer";
import ClientAuth from "../../middlewares/clientMiddleware";
import { createArticle } from "../../controllers/articleController";

const router = express.Router();

router.post("/", upload.single("image"), ClientAuth, createArticle);

export default router;
