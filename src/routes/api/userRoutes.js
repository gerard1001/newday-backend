import express from "express";
import {
  registerWorker,
  clientSignUp,
  getUsers,
  updateUser,
  deleteUser,
  deleteOneUser,
  userLogin,
  getOneUser,
  verifyUser,
  resetLink,
  resetPwd,
} from "../../controllers/userController";
import { Auth, updateAuth, deleteAuth } from "../../middlewares/userMiddleware";
import upload from "../../helpers/multer";

const router = express.Router();

router.post("/register", upload.single("picture"), registerWorker);

router.post("/client_register", upload.single("picture"), clientSignUp);

// router.post("/", createProfile);

router.get("/", getUsers);

router.patch("/admin-update/:id", Auth, updateUser); //This update option will have an option to change the role. Only performed by the admin.

router.patch("/:id", updateAuth, updateUser); //This will allow the user to update their information, exept their role.

router.get("/:id", getOneUser);

router.delete("/", Auth, deleteUser);

router.delete("/:id", deleteAuth, deleteOneUser);

router.post("/login", userLogin);

router.get("/verify_user/:token", verifyUser);

router.post("/reset_link/", resetLink);

router.patch("/reset_pwd/:token", resetPwd);

export default router;
