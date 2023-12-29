import { Router } from "express";
import {
  getRingsOfPower,
  getRingOfPowerById,
  createRingOfPower,
} from "../controllers/ringOfPower-controllers";

const ringOfPowerRouter = Router();

ringOfPowerRouter.get("/ringsOfPower", getRingsOfPower);
ringOfPowerRouter.get("/ringsOfPower/:id", getRingOfPowerById);
ringOfPowerRouter.post("/ringsOfPower", createRingOfPower);

export { ringOfPowerRouter };
