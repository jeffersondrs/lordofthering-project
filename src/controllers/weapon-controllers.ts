import { Request, Response } from "express";
import { Weapon } from "../types/global-types";
import { WeaponModel } from "../models/weapon-model";

export const getWeapons = async (req: Request, res: Response) => {
  const weapons = await WeaponModel.find().sort({ name: 1 });
  res.json({ weapons });
};

export const getWeaponById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const weapon = await WeaponModel.findById(id);

  res.json({ weapon });
};

export const createWeapon = async (req: Request, res: Response) => {
  const { name, description } = req.body as Weapon;

  const weapon = await WeaponModel.create({
    name,
    description,
  });

  res.json({ weapon });
};
