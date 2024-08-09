import { Router } from "express";
import {
  getCurrentUser,
  getGoToStatus,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validation.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/go-to-stats", authorizePermissions("admin"), getGoToStatus);
router.patch("/update-user", validateUpdateUserInput, updateUser);

export default router;
