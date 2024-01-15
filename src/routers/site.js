import { Router } from "express";
import siteController from "../controllers/SiteController.js";

const router = Router();

router.get("/", siteController.indexPage);

export default router;
