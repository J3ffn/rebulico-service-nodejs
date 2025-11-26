import { PostStatus } from "../../shared/constants/PostConstants";
import PostDocument from "../entities/Post.document";
import PostRepository from "../../infra/repositories/Post.repository";

export default class PostService {
  private readonly postRepository: PostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  public async savePost(post: PostDocument): Promise<PostDocument> {
    post.status = PostStatus.PUBLISHED
    return await this.postRepository.save(post);
  }

  public async findAllPosts(): Promise<PostDocument[] | null> {
    return await this.postRepository.findAll();
  }

  public async findPostById(id: string): Promise<PostDocument | null> {
    return await this.postRepository.findById(id);
  }

  public async findPostByCategorySlug(slug: string): Promise<PostDocument[] | null> {
    return await this.postRepository.findByCategorySlug(slug);
  }

  public async findPostByCategoryId(categoryId: string): Promise<PostDocument[] | null> {
    return await this.postRepository.findByCategoryId(categoryId);
  }
}
