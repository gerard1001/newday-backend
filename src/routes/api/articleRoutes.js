import express from "express";
import upload from "../../helpers/multer";
import ClientAuth from "../../middlewares/clientMiddleware";
import {
  createArticle,
  getArticles,
} from "../../controllers/articleController";

const router = express.Router();

router.post("/", upload.single("image"), ClientAuth, createArticle);
router.get("/", getArticles);

export default router;
