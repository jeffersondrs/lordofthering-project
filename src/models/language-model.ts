import { Schema, model } from "mongoose";
import { Language } from "../types/global-types";

const languageSchema = new Schema({
  name: {
    type: String,
    required: [true, "A linguagem precisa ter um nome"],
  },
  description: {
    type: String,
    required: [true, "A linguagem precisa ter uma descrição"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

const LanguageModel = model<Language>("Language", languageSchema);

export { LanguageModel };
