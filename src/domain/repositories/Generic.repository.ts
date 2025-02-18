export interface GenericRepository<T> {
  save(data: T): Promise<void>;
  findAll(): Promise<T | T[] | null>;
  findById(id: string): Promise<T | null>;
}
