import express from "express";
import { registerUser, getUser, updateUser, deleteUser, deleteOneUser } from "../../controllers/userController"
import auth from "../../controllers/authController"


const router = express.Router();

router.post("/register", registerUser);
router.get("/", getUser);
router.patch("/:id", updateUser);
router.delete("/", deleteUser);
router.delete("/:id", deleteOneUser);

router.post("/login", auth.login);

export default router;
