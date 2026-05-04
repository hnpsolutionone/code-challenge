// controllers/resource.controller.ts
import { Request, Response, NextFunction } from "express";
import { ResourceService } from "../services/resource.service";

const service = new ResourceService();

// Controller handles HTTP only, not business logic
export const createResource = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await service.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const listResources = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await service.list(req.query);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getResource = async (req: Request,
  res: Response,
  next: NextFunction) => {
  try {
    const result = await service.getById(req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const updateResource = async (req: Request,
  res: Response,
  next: NextFunction) => {
  try {
    const result = await service.update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const deleteResource = async (req: Request,
  res: Response,
  next: NextFunction) => {
  try {
    await service.delete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};