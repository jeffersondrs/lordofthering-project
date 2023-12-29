import { Router } from "express";
import {
  getRacas,
  getRacaById,
  createRaca,
  deleteRaca,
  updateRaca,
} from "../controllers/race-controllers";

const raceRouter = Router();

raceRouter.get("/racas", getRacas);
raceRouter.get("/racas/:id", getRacaById);
raceRouter.post("/racas", createRaca);
raceRouter.delete("/racas/:id", deleteRaca);
raceRouter.put("/racas/:id", updateRaca);

export { raceRouter };

