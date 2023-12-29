import { Schema, model } from "mongoose";
import { Location } from "../types/global-types";

const locationSchema = new Schema({
  name: {
    type: String,
    required: [true, "O local precisa ter um nome"],
  },
  description: {
    type: String,
    required: [true, "O local precisa ter uma descrição"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

const LocationModel = model<Location>("Location", locationSchema);

export { LocationModel };