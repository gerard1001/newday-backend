import express from "express";
import ClientAuth from "../../middlewares/clientMiddleware";
import {createArticle} from "../../controllers/articleController"

const router = express.Router();

router.post("/", ClientAuth, createArticle);

export default router;
