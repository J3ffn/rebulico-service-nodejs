import { PostDocument } from "../../../domain/entities/PostDocument";
import PostService from "../../../domain/services/PostService";
import CreatePostDTO from "../../dto/CreatePostDTO";
import { UserTraceDocument } from "../../../domain/entities/UserTraceDocument";

export class CreatePostUsecase {
  private readonly postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  public async execute(
    data: CreatePostDTO,
    responsible: UserTraceDocument
  ): Promise<void> {
    const { content, authorId, title } = data;
    const post = new PostDocument(title, content, authorId, responsible);

    await this.postService.savePost(post);
  }
}
