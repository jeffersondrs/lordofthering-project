import { Router } from "express";
import {
  getWeapons,
  getWeaponById,
  createWeapon,
  deleteWeapon,
  updateWeapon,
} from "../controllers/weapon-controllers";

const weaponRouter = Router();

weaponRouter.get("/weapons", getWeapons);
weaponRouter.get("/weapons/:id", getWeaponById);
weaponRouter.post("/weapons", createWeapon);
weaponRouter.delete("/weapons/:id", deleteWeapon);
weaponRouter.put("/weapons/:id", updateWeapon);

export { weaponRouter };
