
import PrincipalsPostsDocument from "../entities/PrincipalsPosts.document";
import PrincipalsPostRepository from "../repositories/PrincipalsPost.repository";

export default class PrincipalsPostService {
  private readonly principalsPostRepository: PrincipalsPostRepository;

  constructor() {
    this.principalsPostRepository = new PrincipalsPostRepository();
  }

  public async savePost(post: PrincipalsPostsDocument): Promise<void> {
    await this.principalsPostRepository.save(post);
  }

  public async findPrincipalsPosts(): Promise<PrincipalsPostsDocument | null> {
    return await this.principalsPostRepository.findAll();
  }
}
