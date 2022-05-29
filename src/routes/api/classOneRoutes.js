import express from "express";
import {
    createClassOne,
    getClassOne,
    getOneClassOne,
    updateClassOne,
    deleteClassOne,
    deleteOneClassOne,
} from "../../controllers/classOneController";

const router = express.Router();

router.post('/', createClassOne);
router.get('/', getClassOne);
router.get('/:id/', getOneClassOne);
router.patch('/:id/', updateClassOne);
router.delete('/', deleteClassOne);
router.delete('/:id', deleteOneClassOne);

export default router;