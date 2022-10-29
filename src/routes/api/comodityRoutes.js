import express from "express";
import {
  createComodity,
  getComodities,
  //   getOneCompany,
  //   updateCompany,
  deleteComodities,
  //   deleteOneCompany,
} from "../../controllers/comodityController.js";
import { ComodityAuth } from "../../middlewares/productMiddleware";

const router = express.Router();

router.post("/", ComodityAuth, createComodity);
router.get("/", getComodities);
// router.get("/:id/", getOneCompany);
// router.patch("/:id/", upload.single("companyLogo"), updateCompany);
router.delete("/", deleteComodities);
// router.delete("/:id", deleteOneCompany);

export default router;
