import { Request, Response } from "express";
import { HttpStatus } from "../../shared/constants/HttpStatus";
import buildError from "../../shared/utils/BuildError";
import logger from "../../shared/services/Logger";
import { FindAllTagsUseCase } from "../../application/useCases/tag/FindAllTags.useCase";
import { CreateTagsUseCase } from "../../application/useCases/tag/CreateTagsUseCase";
import { FindTagByIdUseCase } from "../../application/useCases/tag/findTagById.useCase";

export default class TagController {
  private readonly findAllTagsUseCase: FindAllTagsUseCase;
  private readonly createTagsUseCase: CreateTagsUseCase;
  private readonly findTagByIdUseCase: FindTagByIdUseCase;

  constructor() {
    this.findAllTagsUseCase = new FindAllTagsUseCase();
    this.createTagsUseCase = new CreateTagsUseCase();
    this.findTagByIdUseCase = new FindTagByIdUseCase();
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      const tags = await this.createTagsUseCase.execute(body);
      res.status(HttpStatus.OK).json(tags);
    } catch (err: any) {
      const errorBuilded = buildError(err, HttpStatus.BAD_REQUEST);
      logger.error(err);
      res.status(HttpStatus.BAD_REQUEST).json(errorBuilded);
    }
  }

  public async findAllTags(_: Request, res: Response): Promise<void> {
    try {
      const tags = await this.findAllTagsUseCase.execute();
      res.status(HttpStatus.OK).json(tags);
    } catch (err: any) {
      const errorBuilded = buildError(err, HttpStatus.BAD_REQUEST);
      logger.error(err);
      res.status(HttpStatus.BAD_REQUEST).json(errorBuilded);
    }
  }

  public async findTagById(_: Request, res: Response): Promise<void> {
    try {
      const tag = await this.findTagByIdUseCase.execute(_.params.id);
      res.status(HttpStatus.OK).json(tag);
    } catch (err: any) {
      const errorBuilded = buildError(err, HttpStatus.BAD_REQUEST);
      logger.error(err);
      res.status(HttpStatus.BAD_REQUEST).json(errorBuilded);
    }
  }
}
