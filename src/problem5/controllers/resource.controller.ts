// controllers/resource.controller.ts
import { Request, Response, NextFunction } from "express";
import { ResourceService } from "../services/resource.service";
import { CreateResourceDTO, UpdateResourceDTO, ResourceQuery } from "../types/resource.types";

const service = new ResourceService();

// Controller handles HTTP only, not business logic
export const createResource = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const service = new ResourceService(); // 👈 move inside
    const data: CreateResourceDTO = req.body;
    const result = await service.create(data);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const listResources = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query: ResourceQuery = {
      type: req.query.type as string,
      status: req.query.status as string,
      page: Number(req.query.page) || 1,
      limit: Number(req.query.limit) || 10,
    };

    const result = await service.list(query);
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
    const data: Partial<UpdateResourceDTO> = req.body;
    const result = await service.update(req.params.id, data);
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