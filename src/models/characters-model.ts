import { Schema, model } from "mongoose";
import { Character } from "../types/global-types";

const characterSchema = new Schema({
  name: {
    type: String,
    required: [true, "O personagem precisa ter um nome"],
  },
  description: {
    type: String,
    required: [true, "O personagem precisa ter uma descrição"],
  },
  status: {
    type: String,
    required: [true, "O personagem precisa ter um status"],
  },
  race_id: {
    type: Schema.Types.ObjectId,
    ref: "Raca",
    required: true,
  },
  class_id: {
    type: Schema.Types.ObjectId,
    ref: "Class",
    required: false,
  },
  kingdom_id: {
    type: Schema.Types.ObjectId,
    ref: "Kingdom",
    required: false,
  },
  location_id: {
    type: Schema.Types.ObjectId,
    ref: "Location",
    required: false,
  },
  book_id: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: false,
  },
  ringOfPower_id: {
    type: Schema.Types.ObjectId,
    ref: "RingOfPower",
    required: false,
  },
  language_id: {
    type: Schema.Types.ObjectId,
    ref: "Language",
    required: false,
  },
  weapon_id: {
    type: Schema.Types.ObjectId,
    ref: "Weapon",
    required: false,
  },
  image: {
    type: String,
    required: [true, "O personagem precisa ter uma imagem"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});
const CharacterModel = model<Character>("Character", characterSchema);

export { CharacterModel };
