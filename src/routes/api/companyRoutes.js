import express from "express";
import upload from "../../helpers/multer";
import {
  createCompany,
  getCompanies,
  getOneCompany,
  //   updateCompany,
  deleteCompanies,
  //   deleteOneCompany,
} from "../../controllers/companyController.js";
import { CompanyAuth } from "../../middlewares/productMiddleware";
import { uploadCompanyLogo } from "../../helpers/fileUpload";

const router = express.Router();

router.post(
  "/",
  CompanyAuth,
  uploadCompanyLogo,
  upload.single("companyLogo"),
  createCompany
);
router.get("/", getCompanies);
router.get("/:id/", getOneCompany);
// router.patch("/:id/", upload.single("companyLogo"), updateCompany);
router.delete("/", deleteCompanies);
// router.delete("/:id", deleteOneCompany);

export default router;
