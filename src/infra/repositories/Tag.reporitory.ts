import TagModel from "../database/schemas/Tag.schema";
import { TagDocument } from "../../domain/entities/Tag.document";
import { GenericRepository } from "../../domain/repositories/Generic.repository";

export default class TagRepository implements GenericRepository<TagDocument> {
  save(data: TagDocument): Promise<TagDocument> {
    const newTag = new TagModel({ ...data });
    return newTag.save();
  }

  findAll(): Promise<TagDocument[] | null> {
    return TagModel.find().select("-created_at -updated_at").lean();
  }

  findById(id: string): Promise<TagDocument | null> {
    const found = TagModel.findById(id);
    return found;
  }
}
