import { Router } from "express";
import {
  getClasses,
  getClassById,
  createClass,
  deleteClass,
  updateClass,
} from "../controllers/class-controllers";

const classRouter = Router();

classRouter.get("/classes", getClasses);
classRouter.get("/classes/:id", getClassById);
classRouter.post("/classes", createClass);
classRouter.delete("/classes/:id", deleteClass);
classRouter.put("/classes/:id", updateClass);

export { classRouter };
