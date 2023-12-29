import { Request, Response } from "express";
import { RingOfPower } from "../types/global-types";
import { RingOfPowerModel } from "../models/ring-of-power-model";

export const getRingsOfPower = async (req: Request, res: Response) => {
  const ringsOfPower = await RingOfPowerModel.find().sort({ name: 1 });
  res.json({ ringsOfPower });
};

export const getRingOfPowerById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const ringOfPower = await RingOfPowerModel.findById(id);

  res.json({ ringOfPower });
};

export const createRingOfPower = async (req: Request, res: Response) => {
  const { name, description } = req.body as RingOfPower;

  const ringOfPower = await RingOfPowerModel.create({
    name,
    description,
  });

  res.json({ ringOfPower });
};

export const updateRingOfPower = async (req: Request, res: Response) => {
  const { id } = req.params;

  await RingOfPowerModel.findByIdAndUpdate(id, req.body);

  res.json({ message: "Anel atualizado com sucesso" });
};

export const deleteRingOfPower = async (req: Request, res: Response) => {
  const { id } = req.params;

  await RingOfPowerModel.findByIdAndDelete(id);

  res.json({ message: "Anel deletado com sucesso" });
};
