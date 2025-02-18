import PostDocument from "../../../domain/entities/Post.document";
import PostService from "../../../domain/services/Post.service";

export class FindPostByIdUseCase {
  constructor(private readonly postService: PostService = new PostService()) {}

  public async execute(id: string): Promise<PostDocument | null> {
    return await this.postService.findPostById(id);
  }
}
