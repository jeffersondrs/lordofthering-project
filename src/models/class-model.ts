import { Schema, model } from "mongoose";
import { Class } from "../types/global-types";

const classSchema = new Schema({
  name: {
    type: String,
    required: [true, "A classe precisa ter um nome"],
  },
  description: {
    type: String,
    required: [true, "A classe precisa ter uma descrição"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

const ClassModel = model<Class>("Class", classSchema);

export { ClassModel };
