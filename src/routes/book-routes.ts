import { Router } from "express";
import {
  getBooks,
  getBookById,
  createBook,
  // deleteBook,
  // updateBook,
} from "../controllers/book-controllers";

const bookRouter = Router();

bookRouter.get("/books", getBooks);
bookRouter.get("/books/:id", getBookById);
bookRouter.post("/books", createBook);

export { bookRouter };