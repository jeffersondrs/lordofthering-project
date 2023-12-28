import { Request, Response } from "express";
import { Character } from "../types/global-types";
import CharacterModel from "../models/characters-model";

export const getCharacters = async (req: Request, res: Response) => {
  const characters = await CharacterModel.find().sort({ name: 1});
  res.json({ characters });
};

export const getCharacterById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const character = await CharacterModel.findById(id);

  res.json({ character });
};

export const createCharacter = async (req: Request, res: Response) => {
  const { name, description, race, status, image } = req.body as Character;

  const characterExist = await CharacterModel.findOne({ name });

  if (characterExist) {
    return res.status(400).json({ message: "Personagem já existe" });
  }

  const character = await CharacterModel.create({
    name,
    image,
    race,
    status,
    description,
  });

  res.json({ character });
};

export const updateCharacter = async (req: Request, res: Response) => {
  const { id } = req.params;

  await CharacterModel.findByIdAndUpdate(id, req.body);

  res.json({ message: "Personagem atualizado com sucesso" });
};

export const deleteCharacter = async (req: Request, res: Response) => {
  const { id } = req.params;

  await CharacterModel.findByIdAndDelete(id);

  res.json({ message: "Personagem deletado com sucesso" });
};