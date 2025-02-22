import PostDocument from "../entities/Post.document";
import PostRepository from "../../infra/repositories/Post.repository";

export default class PostService {
  private readonly postRepository: PostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  public async principalsNotices(): Promise<PostDocument[] | null> {
    return await this.postRepository.findAll();
  }

  public async findPostById(id: string): Promise<PostDocument | null> {
    return await this.postRepository.findById(id);
  }
}
