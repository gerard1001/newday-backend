import express from "express";
import {
  registerUser,
  getUser,
  updateUser,
  deleteUser,
  deleteOneUser,
  userLogin,
  getOneUser,
} from "../../controllers/userController";
import Auth from "../../middlewares/userMiddleware";
import upload from "../../helpers/multer";

const router = express.Router();

router.post("/register", upload.single("picture"), registerUser);

// router.post("/", createProfile);

router.get("/", getUser);

router.patch("/admin-update/:id", Auth, updateUser); //This update option will have an option to change the role. Only performed by the admin.

router.patch("/:id", updateUser); //This will allow the user to update their information, exept their role.

router.get("/:id", getOneUser);

router.delete("/", Auth, deleteUser);

router.delete("/:id", deleteOneUser);

router.post("/login", userLogin);

export default router;
