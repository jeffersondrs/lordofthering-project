import { Router } from "express";
import {
  createCharacter,
  getCharacters,
  getCharacterById,
  deleteCharacter,
  updateCharacter,
} from "../controllers/characters-controllers";

const router = Router();

router.get("/characters", getCharacters);
router.get("/characters/:id", getCharacterById);
router.post("/characters", createCharacter);
router.put("/characters/:id", updateCharacter);
router.delete("/characters/:id", deleteCharacter);

export { router };
