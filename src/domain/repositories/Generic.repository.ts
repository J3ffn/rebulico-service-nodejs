export interface GenericRepository<T> {
  save(data: T): Promise<T | void>;
  findAll(): Promise<T[] | null>;
  findById(id: string): Promise<T | null>;
}
