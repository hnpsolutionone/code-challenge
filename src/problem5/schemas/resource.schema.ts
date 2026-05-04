import { z } from "zod";

// Validation schema for creating resource
export const createResourceSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.string().min(1, "Type is required"),
  status: z.string().min(1, "Status is required")
});

// Validation schema for update (partial)
export const updateResourceSchema = z.object({
  name: z.string().optional(),
  type: z.string().optional(),
  status: z.string().optional()
});