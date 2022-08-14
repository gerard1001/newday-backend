import express from "express";
import {
  assignUser,
  getAssignments,
  getOneAssignment,
} from "../../controllers/userCategoryController";
import { Auth } from "../../middlewares/userMiddleware";

const router = express.Router();

router.post("/", Auth, assignUser);
router.get("/", getAssignments);
router.get("/:id", getOneAssignment);

export default router;
