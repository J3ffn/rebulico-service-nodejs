import PostDocument from "../../../domain/entities/Post.document";
import PostService from "../../../domain/services/Post.service";
import CreatePostDTO from "../../dto/post/CreatePostDTO";

export class CreatePostUsecase {
  private readonly postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  public async execute(data: CreatePostDTO): Promise<PostDocument> {
    const newPost: PostDocument = { ...data };

    return await this.postService.savePost(newPost);
  }
}
