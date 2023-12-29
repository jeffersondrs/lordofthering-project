import { Router } from "express";
import {
  createCharacter,
  getCharacters,
  getCharacterById,
  deleteCharacter,
  updateCharacter,
  getCharactersByRace,
  getCharactersByClass,
  getCharactersByBook,
  getCharactersByKingdom,
  getCharactersByLocation,
  getCharactersByLanguage,
  getCharactersByRingOfPower,
  getCharactersByWeapon,
} from "../controllers/characters-controllers";

const userRouter = Router();

userRouter.get("/characters", getCharacters);
userRouter.get("/characters/:id", getCharacterById);
userRouter.get("/characters/race/:id", getCharactersByRace);
userRouter.get("/characters/class/:id", getCharactersByClass);
userRouter.get("/characters/book/:id", getCharactersByBook);
userRouter.get("/characters/kingdom/:id", getCharactersByKingdom);
userRouter.get("/characters/location/:id", getCharactersByLocation);
userRouter.get("/characters/language/:id", getCharactersByLanguage);
userRouter.get("/characters/ring/:id", getCharactersByRingOfPower);
userRouter.get("/characters/weapon/:id", getCharactersByWeapon);
userRouter.post("/characters", createCharacter);
userRouter.put("/characters/:id", updateCharacter);
userRouter.delete("/characters/:id", deleteCharacter);

export { userRouter };
