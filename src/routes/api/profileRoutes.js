import express from "express";
import {createProfile,seeProfile,updateProfile}from "../../controllers/profileController.js"

const router = express.Router();

router.post("/", createProfile);
router.get("/", seeProfile);
router.patch("/", updateProfile);

export default router;