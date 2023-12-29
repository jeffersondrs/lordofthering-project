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

export const getCharactersByBook = async (req: Request, res: Response) => {
  const bookId = req.params.id;

  const charactersByBook = await CharacterModel.find({ book_id: bookId });

  res.json({ bookId, charactersByBook });
};

export const getCharactersByKingdom = async (req: Request, res: Response) => {
  const kingdomId = req.params.id;

  const charactersByKingdom = await CharacterModel.find({
    kingdom_id: kingdomId,
  });

  res.json({ kingdomId, charactersByKingdom });
};

export const getCharactersByLanguage = async (req: Request, res: Response) => {
  const languageId = req.params.id;

  const charactersByLanguage = await CharacterModel.find({
    language_id: languageId,
  });

  res.json({ languageId, charactersByLanguage });
};

export const getCharactersByLocation = async (req: Request, res: Response) => {
  const locationId = req.params.id;

  const charactersByLocation = await CharacterModel.find({
    location_id: locationId,
  });

  res.json({ locationId, charactersByLocation });
};

export const getCharactersByRingOfPower = async (
  req: Request,
  res: Response
) => {
  const ringOfPowerId = req.params.id;

  const charactersByRingOfPower = await CharacterModel.find({
    ringOfPower_id: ringOfPowerId,
  });

  res.json({ ringOfPowerId, charactersByRingOfPower });
};

export const getCharactersByWeapon = async (req: Request, res: Response) => {
  const weaponId = req.params.id;

  const charactersByWeapon = await CharacterModel.find({ weapon_id: weaponId });

  res.json({ weaponId, charactersByWeapon });
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
    death,
    birth,
    daughter,
    son,
    father,
    mother,
    hair_color,
    history,
    skin_color,
    spouse,
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
    death,
    birth,
    daughter,
    son,
    father,
    mother,
    hair_color,
    spouse,
    skin_color,
    history,
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
