import { CategoryDocument } from "../../../domain/entities/Category.document";
import { CategoryService } from "../../../domain/services/category.service";

export class FindAllCategoryUseCase {
  private readonly categoryService: CategoryService;
  constructor() {
    this.categoryService = new CategoryService();
  }

  public async execute(): Promise<CategoryDocument[] | null> {
    const category = await this.categoryService.findAll();
    return category;
  }
}
