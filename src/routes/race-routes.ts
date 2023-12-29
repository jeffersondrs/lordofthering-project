import { Router } from "express";
import {
  getRacas,
  getRacaById,
  createRaca,
} from "../controllers/race-controller";

const raceRouter = Router();

raceRouter.get("/racas", getRacas);
raceRouter.get("/racas/:id", getRacaById);
raceRouter.post("/racas", createRaca);

export { raceRouter };

