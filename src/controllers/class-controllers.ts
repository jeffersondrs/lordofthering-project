import { Request, Response } from "express";
import {ClassModel} from "../models/class-model";
import { Class } from "../types/global-types";

export const getClasses = async (req: Request, res: Response) => {
  const classes = await ClassModel.find().sort({ name: 1 });
  res.json({ classes });
};

export const getClassById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const classe = await ClassModel.findById(id);

  res.json({ classe });
}

export const createClass = async (req: Request, res: Response) => {
  const { name, description } = req.body as Class;

  const classes = await ClassModel.create({
    name,
    description,
  });

  res.json({ classes });
}

export const updateClass = async (req: Request, res: Response) => {
  const { id } = req.params;

  await ClassModel.findByIdAndUpdate(id, req.body);

  res.json({ message: "Classe atualizada com sucesso" });
}

export const deleteClass = async (req: Request, res: Response) => {
  const { id } = req.params;

  await ClassModel.findByIdAndDelete(id);

  res.json({ message: "Classe deletada com sucesso" });
}
