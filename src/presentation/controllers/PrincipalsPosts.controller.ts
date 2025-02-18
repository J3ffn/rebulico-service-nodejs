import { Request, Response } from "express";
import { HttpStatus } from "../../shared/constants/HttpStatus";
import logger from "../../shared/services/Logger";
import { FindPrincipalsPostsUseCase } from "../../application/useCases/principalsPosts/FindPrincipalsPosts.useCase";

export default class PrincipalsPostController {
  private readonly findPrincipalsPostsUseCase: FindPrincipalsPostsUseCase;

  constructor() {
    this.findPrincipalsPostsUseCase = new FindPrincipalsPostsUseCase();
  }

  public async findPrincipalsPosts(_: Request, res: Response): Promise<void> {
    try {
      const posts = await this.findPrincipalsPostsUseCase.execute();
      res.status(HttpStatus.OK).json(posts);
    } catch (err) {
      logger.error(err);
      res.status(HttpStatus.BAD_REQUEST).json(err);
    }
  }
}
