import { Router } from "express";
import {
  getClasses,
  getClassById,
  createClass,
} from "../controllers/class-controller";

const classRouter = Router();

classRouter.get("/classes", getClasses);
classRouter.get("/classes/:id", getClassById);
classRouter.post("/classes", createClass);

export { classRouter };