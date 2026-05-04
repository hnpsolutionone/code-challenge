// services/resource.service.ts
import { HttpError } from "../utils/http-error";
import { ResourceModel } from "../models/resource.model";

export class ResourceService {
  async create(data: any) {
    return ResourceModel.create(data);
  }

  async list(query: any) {
    const {
      type,
      status,
      page = "1",
      limit = "10"
    } = query;

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    const filter: any = {};
    if (type) filter.type = type;
    if (status) filter.status = status;

    return ResourceModel.find(filter)
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum)
      .lean();
  }

  async getById(id: string) {
    const data = await ResourceModel.findById(id).lean();
    if (!data) throw new HttpError(404, "Resource not found");
    return data;
  }

  async update(id: string, data: any) {
    return ResourceModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return ResourceModel.findByIdAndDelete(id);
  }
}