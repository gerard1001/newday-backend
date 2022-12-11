import express from "express";
import {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  deleteOneProduct,
  getOneProduct,
} from "../../controllers/productController";
import { getClassProducts } from "../../controllers/classController";
import { Auth } from "../../middlewares/productMiddleware";
import upload from "../../helpers/multer";
import {
  imageArrayUpload,
  updateImageArrayUpload,
} from "../../helpers/fileUpload";

const router = express.Router();

router.post("/", Auth, imageArrayUpload, upload.array("images"), createProduct);
router.get("/", getProduct);
router.get("/:id", getOneProduct);
router.patch(
  "/:id/",
  updateImageArrayUpload,
  upload.array("images"),
  updateProduct
);
router.delete("/:id/", deleteOneProduct);
router.delete("/", deleteProduct);
router.get("/product_of_class/:id", getClassProducts);

export default router;
