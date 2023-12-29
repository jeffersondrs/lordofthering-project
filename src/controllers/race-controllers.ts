
import { Request, Response } from "express";
import { RaceModel } from "../models/race-model";
import { Raca } from "../types/global-types";

export const getRacas = async (req: Request, res: Response) => {
  const racas = await RaceModel.find().sort({ name: 1 });
  res.json({ racas });
};

export const getRacaById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const raca = await RaceModel.findById(id);

  res.json({ raca });
};

export const createRaca = async (req: Request, res: Response) => {
  const { name, description, image } = req.body as Raca;

  const racaExist = await RaceModel.findOne({ name });

  if (racaExist) {
    return res.status(400).json({ message: "Raça já existe" });
  }

  const raca = await RaceModel.create({
    name,
    image,
    description,
  });

  res.json({ raca });
};

export const updateRaca = async (req: Request, res: Response) => {
  const { id } = req.params;

  await RaceModel.findByIdAndUpdate(id, req.body);

  res.json({ message: "Raça atualizada com sucesso" });
};

export const deleteRaca = async (req: Request, res: Response) => {
  const { id } = req.params;

  await RaceModel.findByIdAndDelete(id);

  res.json({ message: "Raça deletada com sucesso" });
};