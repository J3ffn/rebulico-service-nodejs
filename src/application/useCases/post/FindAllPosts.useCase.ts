import PostDocument from "../../../domain/entities/Post.document";
import PostService from "../../../domain/services/Post.service";

export class FindAllPostsUseCase {
  private readonly postService: PostService;
  constructor() {
    this.postService = new PostService();
  }

  public async execute(): Promise<PostDocument[] | null> {
    return await this.postService.findAllPosts();
  }
}
