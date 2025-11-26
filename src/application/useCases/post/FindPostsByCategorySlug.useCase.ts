import PostDocument from "../../../domain/entities/Post.document";
import PostService from "../../../domain/services/Post.service";

export class FindPostByCategorySlugUseCase {
  private readonly postService: PostService;
  constructor() {
    this.postService = new PostService();
  }

  public async execute(slug: string): Promise<PostDocument[] | null> {
    if(!slug) return [];

    const posts = await this.postService.findPostByCategorySlug(slug);
    return posts;
  }
}