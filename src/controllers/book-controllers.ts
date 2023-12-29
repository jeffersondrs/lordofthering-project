import { Request, Response } from "express";
import { Book } from "../types/global-types";
import { BookModel } from "../models/book-model";

export const getBooks = async (req: Request, res: Response) => {
  const books = await BookModel.find().sort({ title: 1 });
  res.json({ books });
};

export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const bookById = await BookModel.findById(id);

  res.json({ bookById });
};

export const createBook = async (req: Request, res: Response) => {
  const { title, description, image } = req.body as Book;

  const book = await BookModel.create({
    title,
    description,
    image,
  });

  res.json({ book });
};
