import { Schema, model } from 'mongoose';
import { Book } from '../types/global-types';

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'O livro precisa ter um título'],
  },
  description: {
    type: String,
    required: [true, 'O livro precisa ter uma descrição'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

const BookModel = model<Book>('Book', bookSchema);

export { BookModel };