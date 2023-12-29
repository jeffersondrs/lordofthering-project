import { Request, Response } from "express";
import { Character } from "../types/global-types";
import { CharacterModel } from "../models/characters-model";

export const getCharacters = async (req: Request, res: Response) => {
  const characters = await CharacterModel.find()
    .sort({ name: 1 })
    .populate([
      "ringOfPower_id",
      "race_id",
      "class_id",
      "book_id",
      "kingdom_id",
      "language_id",
      "location_id",
      "weapon_id",
    ]);
  res.json({ characters });
};

export const getCharacterById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const character = await CharacterModel.findById(id).populate([
    "ringOfPower_id",
    "race_id",
    "class_id",
    "book_id",
    "kingdom_id",
    "language_id",
    "location_id",
    "weapon_id",
  ]);

  res.json({ character });
};

export const getCharactersByRace = async (req: Request, res: Response) => {
  const raceId = req.params.id;

  const charactersByRace = await CharacterModel.find({ race_id: raceId });

  res.json({ raceId, charactersByRace });
};

export const getCharactersByClass = async (req: Request, res: Response) => {
  const classId = req.params.id;

  const charactersByClass = await CharacterModel.find({ class_id: classId });

  res.json({ classId, charactersByClass });
};

export const createCharacter = async (req: Request, res: Response) => {
  const {
    name,
    description,
    race_id,
    status,
    image,
    class_id,
    book_id,
    kingdom_id,
    language_id,
    location_id,
    ringOfPower_id,
    weapon_id,
  } = req.body as Character;

  const characterExist = await CharacterModel.findOne({ name });

  if (characterExist) {
    return res
      .status(400)
      .json({ message: "Personagem já existe", characterExist });
  }

  const character = await CharacterModel.create({
    name,
    image,
    race_id,
    status,
    description,
    class_id,
    book_id,
    kingdom_id,
    language_id,
    location_id,
    ringOfPower_id,
    weapon_id,
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
