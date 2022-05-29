import express from "express";
import {
    createClassTwo,
    getClassTwo,
    getOneClassTwo,
    updateClassTwo,
    deleteClassTwo,
} from "../../controllers/classTwoController";

const router = express.Router();

router.post('/', createClassTwo);
router.get('/', getClassTwo);
router.get('/:id', getOneClassTwo);
router.patch('/:id/', updateClassTwo);
router.delete('/', deleteClassTwo);

export default router;