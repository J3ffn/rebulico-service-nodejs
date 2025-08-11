import { TagDocument } from "../../../domain/entities/Tag.document";
import TagService from "../../../domain/services/Tag.service";

export class FindTagByIdUseCase {
  constructor(private readonly tagService: TagService = new TagService()) {}
  public async execute(id: string): Promise<TagDocument | null> {
    return await this.tagService.findTagById(id);
  }
}
