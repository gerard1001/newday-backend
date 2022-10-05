import express from "express";
import {
  assignProduct,
  getAssignments,
  getOneAssignment,
  deleteOneAssignment,
  deleteAllAssignments,
} from "../../controllers/classProductController.js";
import { Auth } from "../../middlewares/userMiddleware";

const router = express.Router();

router.post("/", Auth, assignProduct);
router.get("/", getAssignments);
router.get("/:id", getOneAssignment);
router.delete("/:id", deleteOneAssignment);
router.delete("/", deleteAllAssignments);

export default router;
