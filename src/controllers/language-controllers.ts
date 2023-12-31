import { Request, Response } from "express";
import { Language } from "../types/global-types";
import { LanguageModel } from "../models/language-model";

export const getLanguages = async (req: Request, res: Response) => {
  const languages = await LanguageModel.find().sort({ name: 1 });
  res.json({ languages });
};

export const getLanguageById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const language = await LanguageModel.findById(id);

  res.json({ language });
}

export const createLanguage = async (req: Request, res: Response) => {
  const { name, description } = req.body as Language;

  const language = await LanguageModel.create({
    name,
    description,
  });

  res.json({ language });
}

export const updateLanguage = async (req: Request, res: Response) => {
  const { id } = req.params;

  await LanguageModel.findByIdAndUpdate(id, req.body);

  res.json({ message: "Linguagem atualizada com sucesso" });
}

export const deleteLanguage = async (req: Request, res: Response) => {
  const { id } = req.params;

  await LanguageModel.findByIdAndDelete(id);

  res.json({ message: "Linguagem deletada com sucesso" });
}