import { Router } from "express";
import postController from "../controllers/PostController.js";

const router = Router();

// route to forms
router.get("/form-create", postController.createForm);
router.get("/:id/form-update", postController.updateForm);

//route to submits
router.post("/create", postController.create);
router.put("/:id/update", postController.update);
router.patch("/:id/restore", postController.restore);
router.delete("/:id/delete", postController.delete);
router.delete("/:id/force-delete", postController.forceDelete);

// route default
router.get("/:id", postController.detail);

export default router;
