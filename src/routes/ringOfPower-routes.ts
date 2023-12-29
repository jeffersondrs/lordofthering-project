import { Router } from "express";
import {
  getRingsOfPower,
  getRingOfPowerById,
  createRingOfPower,
  deleteRingOfPower,
  updateRingOfPower,
} from "../controllers/ringOfPower-controllers";

const ringOfPowerRouter = Router();

ringOfPowerRouter.get("/ringsOfPower", getRingsOfPower);
ringOfPowerRouter.get("/ringsOfPower/:id", getRingOfPowerById);
ringOfPowerRouter.post("/ringsOfPower", createRingOfPower);
ringOfPowerRouter.delete("/ringsOfPower/:id", deleteRingOfPower);
ringOfPowerRouter.put("/ringsOfPower/:id", updateRingOfPower);

export { ringOfPowerRouter };
