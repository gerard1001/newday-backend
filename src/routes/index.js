import express from "express";
import categoryRoutes from "./api/categoryRoutes.js";
import productRoutes from "./api/productRoutes";
import classOneRoutes from "./api/classOneRoutes";
import classTwoRoutes from "./api/classTwoRoutes";
import userRoutes from "./api/userRoutes";
import roleRoutes from "./api/roleRoutes";

const router = express.Router();

router.use("/categories", categoryRoutes);

router.use("/class1", classOneRoutes);

router.use("/class2", classTwoRoutes);

router.use("/products", productRoutes);

router.use("/users", userRoutes);

router.use("/roles", roleRoutes);

export default router;
