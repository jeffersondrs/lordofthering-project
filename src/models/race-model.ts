import mongoose from "mongoose";
import { Raca } from "../types/global-types";

const raceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A raça precisa ter um nome"],
  },
  description: {
    type: String,
    required: [true, "A raça precisa ter uma descrição ou caracteristica"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

const RaceModel = mongoose.model<Raca>("Raca", raceSchema);

export { RaceModel };
