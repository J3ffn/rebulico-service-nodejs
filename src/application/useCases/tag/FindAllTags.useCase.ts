import PrincipalsPostsDocument from "../../../domain/entities/PrincipalsPosts.document";
import { TagDocument } from "../../../domain/entities/Tag.document";
import TagService from "../../../domain/services/Tag.service";

export class FindAllTagsUseCase {
  constructor(
    private readonly tagService = new TagService()
  ) {}

  public async execute(): Promise<TagDocument[] | null> {
    return await this.tagService.findAllTags();
  }
}
