import express from "express";
import {
  createClass,
  getClasses,
  getOneClass,
  updateClass,
  deleteClasses,
  deleteOneClass,
} from "../../controllers/classController";
import { getCategoryClasses } from "../../controllers/categoryController";

const router = express.Router();

router.post("/", createClass);
router.get("/", getClasses);
router.get("/:id/", getOneClass);
router.patch("/:id/", updateClass);
router.delete("/", deleteClasses);
router.delete("/:id", deleteOneClass);
router.get("/class_of_category/:id", getCategoryClasses);

export default router;