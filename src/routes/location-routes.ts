import { Router } from "express";
import {
  getLocations,
  getLocationById,
  createLocation,
  deleteLocation,
  updateLocation,
} from "../controllers/location-controllers";

const locationRouter = Router();

locationRouter.get("/locations", getLocations);
locationRouter.get("/locations/:id", getLocationById);
locationRouter.post("/locations", createLocation);
locationRouter.delete("/locations/:id", deleteLocation);
locationRouter.put("/locations/:id", updateLocation);

export { locationRouter };