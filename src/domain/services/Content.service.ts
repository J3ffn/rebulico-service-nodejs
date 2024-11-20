import { LadingPageContent } from "../entities/LadingPageContent.model";
import PostDocument from "../entities/PostDocument";
import PostRepository from "../repositories/PostRepository";

export default class PostService {
  private readonly postRepository: PostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  public async principalsNotices(): Promise<PostDocument[] | null> {
    return await this.postRepository.findAll();
  }

  public async findPostById(id: string): Promise<PostDocument | null> {
    return await this.postRepository.findById(id);
  }
}
