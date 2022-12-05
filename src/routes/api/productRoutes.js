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

const router = express.Router();

router.post("/", Auth, createProduct);
router.get("/", getProduct);
router.get("/:id", getOneProduct);
router.patch("/:id/", updateProduct);
router.delete("/:id/", deleteOneProduct);
router.delete("/", deleteProduct);
router.get("/product_of_class/:id", getClassProducts);

export default router;
