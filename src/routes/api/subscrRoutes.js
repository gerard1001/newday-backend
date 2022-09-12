import express from "express";
import { subscribeMsg, subscribe } from "../../controllers/subscrController.js";
import { authent } from "../../middlewares/userMiddleware";

const router = express.Router();

router.get("/", authent, subscribeMsg);
router.get("/:token", subscribe);

export default router;
