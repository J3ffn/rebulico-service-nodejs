import { CategoryDocument } from "../../../domain/entities/Category.document";
import { CategoryService } from "../../../domain/services/category.service";

export default class CreateCategoryUseCase {
  private readonly categoryService: CategoryService;
  
  constructor() {
    this.categoryService = new CategoryService();
  }

  public async execute(data: CategoryDocument): Promise<any> {
    const category = await this.categoryService.create(data);
    return category;
  }
}
