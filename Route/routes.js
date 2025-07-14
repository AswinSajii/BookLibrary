import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
} from "../controller/BookController.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);
router.delete("/:id", deleteBook);

export default router;
