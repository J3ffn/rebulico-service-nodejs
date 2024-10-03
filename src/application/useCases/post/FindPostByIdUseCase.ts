import { PostDocument } from "../../../domain/entities/PostDocument";
import PostService from "../../../domain/services/PostService";

export class FindPostByIdUseCase {
  constructor(private readonly postService: PostService = new PostService()) {}

  public async execute(id: string): Promise<PostDocument | null> {
    return await this.postService.findPostById(id);
  }
}
