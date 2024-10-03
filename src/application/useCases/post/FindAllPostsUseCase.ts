import { PostDocument } from "../../../domain/entities/PostDocument";
import PostService from "../../../domain/services/PostService";

export class FindAllPostsUseCase {
  private readonly postService: PostService;
  constructor() {
    this.postService = new PostService();
  }

  public async execute(): Promise<PostDocument[] | null> {
    return await this.postService.findAllPosts();
  }
}
