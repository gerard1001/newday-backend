import express from "express";
import { updateProfile } from "../../controllers/profileController";
import { updateProfileAuth } from "../../middlewares/userMiddleware";
import upload from "../../helpers/multer";

const router = express.Router();

router.patch(
  "/:user_id/:id",
  updateProfileAuth,
  upload.single("picture"),
  updateProfile
);

export default router;
