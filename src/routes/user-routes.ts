import { Router } from "express";
import {
  createCharacter,
  getCharacters,
  getCharacterById,
  deleteCharacter,
  updateCharacter,
} from "../controllers/characters-controllers";

const userRouter = Router();

userRouter.get("/characters", getCharacters);
userRouter.get("/characters/:id", getCharacterById);
userRouter.post("/characters", createCharacter);
userRouter.put("/characters/:id", updateCharacter);
userRouter.delete("/characters/:id", deleteCharacter);

export { userRouter };
