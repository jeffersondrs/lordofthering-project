import { Schema, model } from "mongoose";
import { Kingdom } from "../types/global-types";

const kingdomSchema = new Schema({
  name: {
    type: String,
    required: [true, "O reino precisa ter um nome"],
  },
  description: {
    type: String,
    required: [true, "O reino precisa ter uma descrição"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

const KingdomModel = model<Kingdom>("Kingdom", kingdomSchema);

export { KingdomModel };