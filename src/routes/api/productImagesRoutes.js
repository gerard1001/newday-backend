import express from "express";
import upload from "../../helpers/multer";
import {
  createProductImage,
  getProductImage,
  deleteProductImages,
  deleteOneProductImages,
} from "../../controllers/productImageController.js";

const router = express.Router();

router.post("/", upload.single("imageUrl"), createProductImage);
router.get("/", getProductImage);
router.delete("/", deleteProductImages);
router.delete("/:id", deleteOneProductImages);

export default router;
