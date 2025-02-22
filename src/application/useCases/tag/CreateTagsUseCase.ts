import { TagDocument } from "../../../domain/entities/Tag.document";
import TagService from "../../../domain/services/Tag.service";
import CreateTagDTO from "../../dto/tag/CreateTag.dto";

export class CreateTagsUseCase {
  constructor(
    private readonly tagService = new TagService()
  ) {}

  public async execute(data: CreateTagDTO): Promise<TagDocument | void> {
    const tagConverted: TagDocument = data
    return await this.tagService.saveTag(tagConverted);
  }
}
