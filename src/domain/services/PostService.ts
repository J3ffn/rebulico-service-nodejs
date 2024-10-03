import { PostModel } from "../../infra/database/schemas/Post.schema";
import { PostDocument } from "../entities/PostDocument";
import PostRepository from "../repositories/PostRepository";

export default class PostService {
  private readonly postRepository: PostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  public async savePost(post: PostDocument): Promise<void> {
    await this.postRepository.save(post);
  }

  public async findAllPosts(): Promise<PostDocument[] | null> {
    return await this.postRepository.findAll();
  }

  public async findPostById(id: string): Promise<PostDocument | null> {
    return await this.postRepository.findById(id);
  }
}
