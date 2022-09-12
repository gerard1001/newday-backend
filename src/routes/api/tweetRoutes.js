import express from "express";
import {
  createTweet,
  getTweets,
  deleteTweets,
} from "../../controllers/tweetController.js";
import Auth from "../../middlewares/productMiddleware.js";
import upload from "../../helpers/multer.js";

const router = express.Router();

router.post("/", upload.single("image"), Auth, createTweet);
router.get("/", getTweets);
router.delete("/", deleteTweets);

export default router;
