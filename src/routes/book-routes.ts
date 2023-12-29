import { Router } from "express";
import {
  getBooks,
  getBookById,
  createBook,
  deleteBook,
  updateBook,
} from "../controllers/book-controllers";

const bookRouter = Router();

bookRouter.get("/books", getBooks);
bookRouter.get("/books/:id", getBookById);
bookRouter.post("/books", createBook);
bookRouter.delete("/books/:id", deleteBook);
bookRouter.put("/books/:id", updateBook);

export { bookRouter };