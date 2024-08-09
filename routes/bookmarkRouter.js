import { Router } from "express";
const router = Router();

import {
  getAllBookmarks,
  getBookmark,
  createBookmark,
  updateBookmark,
  deleteBookmark,
} from "../controllers/bookmarkController.js";
import { validateBookmark, validateIdParam } from "../middleware/validation.js";

router.route("/").get(getAllBookmarks).post(validateBookmark, createBookmark);
router
  .route("/:id")
  .get(validateIdParam, getBookmark)
  .patch(validateBookmark, validateIdParam, updateBookmark)
  .delete(validateIdParam, deleteBookmark);

export default router;
