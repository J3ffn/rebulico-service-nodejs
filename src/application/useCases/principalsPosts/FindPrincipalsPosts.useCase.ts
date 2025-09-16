import PrincipalsPostsDocument from "../../../domain/entities/PrincipalsPosts.document";
import PrincipalsPostService from "../../../domain/services/PrincipalsPosts.service";

export class FindPrincipalsPostsUseCase {
  constructor(
    private readonly principalsPostService = new PrincipalsPostService()
  ) {}

  public async execute(): Promise<PrincipalsPostsDocument | null> {
    return await this.principalsPostService.findPrincipalsPosts();
  }
}
