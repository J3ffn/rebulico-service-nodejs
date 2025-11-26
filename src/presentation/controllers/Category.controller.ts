import { Request, Response } from "express";
import { HttpStatus } from "../../shared/constants/HttpStatus";
import buildError from "../../shared/utils/BuildError";
import logger from "../../shared/services/Logger";
import { FindAllCategoryUseCase } from "../../application/useCases/category/FindAllCategory.useCase";
import CreateCategoryUseCase from "../../application/useCases/category/CrateCategory.useCase";

export default class CategoryController {
  private readonly findAllCategoryUseCase: FindAllCategoryUseCase;
  private readonly createCategoryUseCase: CreateCategoryUseCase;

  constructor() {
    this.findAllCategoryUseCase = new FindAllCategoryUseCase();
    this.createCategoryUseCase = new CreateCategoryUseCase();
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      const tags = await this.createCategoryUseCase.execute(body);
      res.status(HttpStatus.OK).json(tags);
    } catch (err: any) {
      const errorBuilded = buildError(err, HttpStatus.BAD_REQUEST);
      logger.error(err);
      res.status(HttpStatus.BAD_REQUEST).json(errorBuilded);
    }
  }

  public async findAllCategory(_: Request, res: Response): Promise<void> {
    try {
      const tags = await this.findAllCategoryUseCase.execute();
      res.status(HttpStatus.OK).json(tags);
    } catch (err: any) {
      const errorBuilded = buildError(err, HttpStatus.BAD_REQUEST);
      logger.error(err);
      res.status(HttpStatus.BAD_REQUEST).json(errorBuilded);
    }
  }
}
