import { Router } from "express";
import {
  getKingdoms,
  getKingdomById,
  createKingdom,
  deleteKingdom,
  updateKingdom,
} from "../controllers/kingdom-controllers";

const kingdomRouter = Router();

kingdomRouter.get("/kingdoms", getKingdoms);
kingdomRouter.get("/kingdoms/:id", getKingdomById);
kingdomRouter.post("/kingdoms", createKingdom);
kingdomRouter.delete("/kingdoms/:id", deleteKingdom);
kingdomRouter.put("/kingdoms/:id", updateKingdom);

export { kingdomRouter };
