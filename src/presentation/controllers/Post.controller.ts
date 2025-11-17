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

  private formatFiles = (files?: Express.Multer.File[]) => {
    if (!files || files.length === 0) return [];

    return files.map((file) => {
      return {
        buffer: file.buffer,
        originalname: file.originalname,
        mimeType: file.mimetype,
      };
    });
  };

  public async create(req: Request, res: Response): Promise<void> {
    const body = JSON.parse(req.body.data);
    const { images, banner } = req.files as {
      images?: Express.Multer.File[];
      banner?: Express.Multer.File[];
    };
    const fileList = this.formatFiles(images);
    const bannerList = this.formatFiles(banner);

    try {
      const dataCreated = await this.createPostUseCase.execute({ ...body, media: fileList, bannerImage: bannerList });
      res.status(HttpStatus.CREATED).json(dataCreated);
    } catch (err: any) {
      const errorBuilded = buildError(err, HttpStatus.BAD_REQUEST);
      logger.error(err);
      res.status(HttpStatus.BAD_REQUEST).json(errorBuilded);
    }
  }

  public async findAllPosts(_: Request, res: Response): Promise<void> {
    try {
      const posts = await this.findAllPostsUseCase.execute();
      res.status(HttpStatus.OK).json(posts);
    } catch (err: any) {
      const errorBuilded = buildError(err, HttpStatus.BAD_REQUEST);
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
