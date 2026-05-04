// types/resource.types.ts
// Strong typing for DTO and query params

export interface CreateResourceDTO {
  name: string;
  type: string;
  status: string;
}

export interface UpdateResourceDTO {
  name?: string;
  type?: string;
  status?: string;
}

export interface ResourceQuery {
  type?: string;
  status?: string;
  page?: number;
  limit?: number;
}