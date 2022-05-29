import express from "express";
import {
    createRole,
    getRole,
    getOneRole,
    updateRole,
    deleteRole,
} from "../../controllers/roleController";

const router = express.Router();

router.post('/', createRole);
router.get('/', getRole);
router.get('/:id', getOneRole);
router.patch('/:id/', updateRole);
router.delete('/', deleteRole);

export default router;