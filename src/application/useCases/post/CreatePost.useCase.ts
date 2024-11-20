import PostDocument from "../../../domain/entities/PostDocument";
import PostService from "../../../domain/services/Post.service";
import CreatePostDTO from "../../dto/CreatePostDTO";

export class CreatePostUsecase {
  private readonly postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  public async execute(
    data: CreatePostDTO
  ): Promise<void> {
    const newPost: PostDocument = { ...data };

    await this.postService.savePost(newPost);
  }
}
