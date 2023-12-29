import { Router } from "express";
import {
  getLanguages,
  getLanguageById,
  createLanguage,
  deleteLanguage,
  updateLanguage,
} from "../controllers/language-controllers";

const languageRouter = Router();

languageRouter.get("/languages", getLanguages);
languageRouter.get("/languages/:id", getLanguageById);
languageRouter.post("/languages", createLanguage);
languageRouter.delete("/languages/:id", deleteLanguage);
languageRouter.put("/languages/:id", updateLanguage);

export { languageRouter };
