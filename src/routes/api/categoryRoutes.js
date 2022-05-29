import express from "express";
import {
    createCategory,
    getCategory,
    getOneCategory,
    updateCategory,
    deleteCategory
} from "../../controllers/categoryController";

const router = express.Router();

router.post('/', createCategory);
router.get('/', getCategory);
router.get('/:id', getOneCategory);
router.patch('/:id/', updateCategory);
router.delete('/', deleteCategory);

export default router;