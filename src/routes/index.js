import express from "express";
import categoryRoutes from "./api/categoryRoutes.js";
import productRoutes from "./api/productRoutes";
import classRoutes from "./api/classRoutes";
import userRoutes from "./api/userRoutes";
import roleRoutes from "./api/roleRoutes";
import user_categoryRoutes from "./api/assignUserToCategory";
import commentRoutes from "./api/commentRoutes";
import articleRoutes from "./api/articleRoutes";
import articleCommentRoutes from "./api/articleCommentRoutes";
import tweetRoutes from "./api/tweetRoutes";
import subscribeRoutes from "./api/subscribeRoutes";
import reviewRoutes from "./api/reviewRoutes";
import replyRoutes from "./api/replyRoutes.js";
import rateRoutes from "./api/rateRoutes.js";

const router = express.Router();

router.use("/categories", categoryRoutes);

router.use("/class1", classRoutes);

router.use("/products", productRoutes);

router.use("/users", userRoutes);

router.use("/subscribe", subscribeRoutes);

router.use("/roles", roleRoutes);

router.use("/user_category", user_categoryRoutes);

router.use("/comment", commentRoutes);

router.use("/reply", replyRoutes);

router.use("/article", articleRoutes);

router.use("/article_comment", articleCommentRoutes);

router.use("/tweet", tweetRoutes);

router.use("/review", reviewRoutes);

router.use("/rate", rateRoutes);

export default router;
