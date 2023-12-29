import { Schema, model } from "mongoose";
import { Weapon } from "../types/global-types";

const weaponSchema = new Schema({
  name: {
    type: String,
    required: [true, "A arma precisa ter um nome"],
  },
  description: {
    type: String,
    required: [true, "A arma precisa ter uma descrição"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

const WeaponModel = model<Weapon>("Weapon", weaponSchema);

export { WeaponModel };
