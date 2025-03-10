import { Request, Response } from "express";
import { FindPostByIdUseCase } from "../../application/useCases/post/FindPostById.useCase";
import { FindAllPostsUseCase } from "../../application/useCases/post/FindAllPosts.useCase";
import { CreatePostUsecase } from "../../application/useCases/post/CreatePost.useCase";
import { HttpStatus } from "../../shared/constants/HttpStatus";
import buildError from "../../shared/utils/BuildError";
import logger from "../../shared/services/Logger";

export default class PostController {
  private readonly createPostUseCase: CreatePostUsecase;
  private readonly findAllPostsUseCase: FindAllPostsUseCase;
  private readonly findPostByIdUseCase: FindPostByIdUseCase;

  constructor() {
    this.createPostUseCase = new CreatePostUsecase();
    this.findAllPostsUseCase = new FindAllPostsUseCase();
    this.findPostByIdUseCase = new FindPostByIdUseCase();
  }

  public async create(req: Request, res: Response): Promise<void> {
    const body = req.body;
    try {
      const dataCreated = await this.createPostUseCase.execute(body);
      res.status(HttpStatus.CREATED).json(dataCreated);
    } catch (err: any) {
      const errorBuilded = buildError(err, HttpStatus.BAD_REQUEST)
      logger.error(err);
      res.status(HttpStatus.BAD_REQUEST).json(errorBuilded);
    }
  }

  public async findAllPosts(_: Request, res: Response): Promise<void> {
    try {
      const posts = await this.findAllPostsUseCase.execute();
      res.status(HttpStatus.OK).json(posts);
    } catch (err: any) {
      const errorBuilded = buildError(err, HttpStatus.BAD_REQUEST)
      logger.error(err);
      res.status(HttpStatus.BAD_REQUEST).json(errorBuilded);
    }
  }

  public async findPostById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const posts = await this.findPostByIdUseCase.execute(id);
      res.status(HttpStatus.OK).json(posts);
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
