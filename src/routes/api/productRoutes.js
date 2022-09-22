import express from "express";
import upload from "../../helpers/multer";
import {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  deleteOneProduct,
  getOneProduct,
} from "../../controllers/productController";

const router = express.Router();

router.post("/", upload.single("productImage"), createProduct);
router.get("/", getProduct);
router.get("/:id", getOneProduct);
router.patch("/:id/", upload.single("productImage"), updateProduct);
router.delete("/:id/", deleteOneProduct);
router.delete("/", deleteProduct);

export default router;
