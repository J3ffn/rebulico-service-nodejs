import { Request, Response } from "express";
import { FindPostByIdUseCase } from "./../../application/useCases/post/FindPostByIdUseCase";
import { FindAllPostsUseCase } from "../../application/useCases/post/FindAllPostsUseCase";
import { CreatePostUsecase } from "../../application/useCases/post/CreatePostUseCase";
import { HttpStatus } from "../../shared/utils/HttpStatus";

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
    const { post, responsible } = req.body;
    try {
      await this.createPostUseCase.execute(post, responsible);
      res.status(HttpStatus.CREATED).send();
    } catch (err) {
      console.error(err);
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  public async findAllPosts(_: Request, res: Response): Promise<void> {
    try {
      const posts = await this.findAllPostsUseCase.execute();
      res.status(HttpStatus.OK).json(posts);
    } catch (err) {
      console.error(err);
      res.status(HttpStatus.BAD_REQUEST).json(err);
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
