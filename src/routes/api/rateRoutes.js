import express from "express";
import { getRating, fetchRatings } from "../../controllers/ratingController.js";

const router = express.Router();

router.get("/", getRating);
router.get("/see", fetchRatings);

export default router;
