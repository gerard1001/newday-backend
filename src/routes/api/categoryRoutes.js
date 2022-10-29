import express from "express";
import {
  createCategory,
  getCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
  deleteOneCategory,
} from "../../controllers/categoryController";
import { Auth } from "../../middlewares/productMiddleware";

const router = express.Router();

router.post("/", Auth, createCategory);
router.get("/", getCategory);
router.get("/:id", getOneCategory);
router.patch("/:id/", updateCategory);
router.delete("/", deleteCategory);
router.delete("/:id", deleteOneCategory);

export default router;
