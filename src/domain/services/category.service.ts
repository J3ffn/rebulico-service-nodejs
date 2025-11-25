import CategoryRepository from "../../infra/repositories/Category.repository";
import { CategoryDocument } from "../entities/Category.document";

export class CategoryService {
  private readonly categoryRepository: CategoryRepository;
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async findAll(): Promise<CategoryDocument[] | null> {
    return await this.categoryRepository.findAll();
  }

  async create(data: CategoryDocument): Promise<CategoryDocument | null> {
    return await this.categoryRepository.save(data);
  }
}
