import mongoose from "mongoose";
import { Class } from "../types/global-types";

const classSchema = new mongoose.Schema({
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

const ClassModel = mongoose.model<Class>("Class", classSchema);

export default ClassModel;