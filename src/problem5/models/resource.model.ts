// models/resource.model.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ResourceDocument extends Document {
  name: string;
  type: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

// Schema defines structure + indexes for performance
const resourceSchema = new Schema<ResourceDocument>(
  {
    name: { type: String, required: true },
    type: { type: String, index: true },
    status: { type: String, index: true }
  },
  { timestamps: true }
);

export const ResourceModel = mongoose.model<ResourceDocument>(
  "Resource",
  resourceSchema
);