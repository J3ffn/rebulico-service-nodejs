import { GenericRepository } from "../repositories/Generic.repository";
import { TagDocument } from "../entities/Tag.document";
import TagRepository from "../../infra/repositories/Tag.reporitory";

export default class TagService {
  private readonly tagRepository: GenericRepository<TagDocument>;

  constructor() {
    this.tagRepository = new TagRepository();
  }

  public async saveTag(data: TagDocument): Promise<TagDocument | null> {
    return await this.tagRepository.save(data)
  }

  public async findAllTags(): Promise<TagDocument[] | null> {
    return await this.tagRepository.findAll();
  }

  public async findTagById(id: string): Promise<TagDocument | null> {
    return await this.tagRepository.findById(id);
  }
}
