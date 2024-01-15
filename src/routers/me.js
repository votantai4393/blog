import { Router } from "express";
import meController from "../controllers/MeController.js";

const router = Router();

router.get("/posts", meController.postStorage);
router.get("/trash", meController.trashStorage);

export default router;
