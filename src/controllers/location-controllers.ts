import { Request, Response } from "express";
import { Location } from "../types/global-types";
import { LocationModel } from "../models/location-model";

export const getLocations = async (req: Request, res: Response) => {
  const locations = await LocationModel.find().sort({ name: 1 });
  res.json({ locations });
};

export const getLocationById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const location = await LocationModel.findById(id);

  res.json({ location });
};

export const createLocation = async (req: Request, res: Response) => {
  const { name, description } = req.body as Location;

  const location = await LocationModel.create({
    name,
    description,
  });

  res.json({ location });
};
