import { Request, Response } from "express";
import {RacaModel} from "../models/race-model";
import { Raca } from "../types/global-types";

export const getRacas = async (req: Request, res: Response) => {
  const racas = await RacaModel.find().sort({ name: 1 });
  res.json({ racas });
};

export const getRacaById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const raca = await RacaModel.findById(id);

  res.json({ raca });
};

export const createRaca = async (req: Request, res: Response) => {
  const { name, description, image } = req.body as Raca;

  const racaExist = await RacaModel.findOne({ name });

  if (racaExist) {
    return res.status(400).json({ message: "Raça já existe" });
  }

  const raca = await RacaModel.create({
    name,
    image,
    description,
  });

  res.json({ raca });
};
