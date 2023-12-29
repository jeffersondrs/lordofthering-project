import { Router } from "express";
import {
  getLanguages,
  getLanguageById,
  createLanguage,
} from "../controllers/language-controllers";

const languageRouter = Router();

languageRouter.get("/languages", getLanguages);
languageRouter.get("/languages/:id", getLanguageById);
languageRouter.post("/languages", createLanguage);

export { languageRouter };
