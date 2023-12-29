import { Request, Response } from "express";
import { Kingdom } from "../types/global-types";
import { KingdomModel } from "../models/kingdom-model";

export const getKingdoms = async (req: Request, res: Response) => {
  const kingdoms = await KingdomModel.find().sort({ name: 1 });
  res.json({ kingdoms });
};

export const getKingdomById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const kingdom = await KingdomModel.findById(id);

  res.json({ kingdom });
};

export const createKingdom = async (req: Request, res: Response) => {
  const { name, description } = req.body as Kingdom;

  const kingdomExist = await KingdomModel.findOne({ name });

  if (kingdomExist) {
    return res.status(400).json({ message: "Reino já existe" });
  }

  const kingdom = await KingdomModel.create({
    name,
    description,
  });

  res.json({ kingdom });
};

export const updateKingdom = async (req: Request, res: Response) => {
  const { id } = req.params;

  await KingdomModel.findByIdAndUpdate(id, req.body);

  res.json({ message: "Reino atualizado com sucesso" });
}

export const deleteKingdom = async (req: Request, res: Response) => {
  const { id } = req.params;

  await KingdomModel.findByIdAndDelete(id);

  res.json({ message: "Reino deletado com sucesso" });
}