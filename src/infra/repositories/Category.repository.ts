import { CategoryDocument } from "../../domain/entities/Category.document";
import { GenericRepository } from "../../domain/repositories/Generic.repository";
import { CategoryModel } from "../database/schemas/Category.schema";

export default class CategoryRepository implements GenericRepository<CategoryDocument> {
  async save(data: CategoryDocument): Promise<CategoryDocument | null> {
    const newCategory = new CategoryModel({ ...data });
    return await newCategory.save();
  }

  async findAll(): Promise<CategoryDocument[] | null> {
    const categories = await CategoryModel.find().exec();
    return categories;
  }

  async findById(id: string): Promise<CategoryDocument | null> {
    const category = await CategoryModel.findById(id).exec();
    return category;
  }
}
