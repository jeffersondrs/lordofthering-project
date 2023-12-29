import { Router } from "express";
import {
  getWeapons,
  getWeaponById,
  createWeapon,
} from "../controllers/weapon-controllers";

const weaponRouter = Router();

weaponRouter.get("/weapons", getWeapons);
weaponRouter.get("/weapons/:id", getWeaponById);
weaponRouter.post("/weapons", createWeapon);

export { weaponRouter };
