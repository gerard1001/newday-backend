import express from "express";
import {
  createReview,
  getReviews,
  deleteReviews,
} from "../../controllers/userController";
import { reviewAuth, authent } from "../../middlewares/userMiddleware";

const router = express.Router();

router.post("/", authent, createReview);
router.get("/", getReviews);
router.delete("/", reviewAuth, deleteReviews);

export default router;
