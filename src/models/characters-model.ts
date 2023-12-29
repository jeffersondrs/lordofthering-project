import mongoose from "mongoose";
import { Character } from "../types/global-types";

const characterSchema = new mongoose.Schema({
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
  raca_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Raca",
    required: false,
  },
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
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
const CharacterModel = mongoose.model<Character>("Character", characterSchema);

export default CharacterModel;
