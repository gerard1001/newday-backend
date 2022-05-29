import express from "express";
import {
    createUser,
    getUser,
    updateUser,
    deleteUser
} from "../../controllers/userController"

const router =express.Router();

router.post('/', createUser);
router.get('/', getUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

export default router;
