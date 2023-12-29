import { Router } from "express";
import {
  getLocations,
  getLocationById,
  createLocation,
} from "../controllers/location-controllers";

const locationRouter = Router();

locationRouter.get("/locations", getLocations);
locationRouter.get("/locations/:id", getLocationById);
locationRouter.post("/locations", createLocation);

export { locationRouter };