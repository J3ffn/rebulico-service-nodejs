import { PostModel } from "../../infra/database/schemas/Post.schema";

export interface GenericRepository<T> {
  save(data: T): Promise<void>;
  findAll(): Promise<T[] | null>;
  findById(id: string): Promise<T | null>;
}
