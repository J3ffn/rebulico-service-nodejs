export interface GenericRepository<T> {
  save(data: T): Promise<T | null>;
  findAll(): Promise<T[] | null>;
  findById(id: string): Promise<T | null>;
}
