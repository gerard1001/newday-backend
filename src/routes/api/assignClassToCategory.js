import express from "express";
import {
  assignClass,
  getAssignments,
  getOneAssignment,
} from "../../controllers/categoryClassController.js";
import { Auth } from "../../middlewares/productMiddleware";

const router = express.Router();

router.post("/", Auth, assignClass);
router.get("/", getAssignments);
router.get("/:id", getOneAssignment);

export default router;
