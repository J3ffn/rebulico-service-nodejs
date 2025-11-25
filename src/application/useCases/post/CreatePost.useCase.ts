import { randomUUID } from "crypto";
import PostDocument from "../../../domain/entities/Post.document";
import PostService from "../../../domain/services/Post.service";
import CreatePostDTO from "../../dto/post/CreatePostDTO";
import { StorageService } from "../../../domain/services/Storage.service";
import PrincipalsPostRepository from "../../../infra/repositories/PrincipalsPost.repository";

export class CreatePostUsecase {
  private readonly postService: PostService;
  private readonly principalsPostRepository: PrincipalsPostRepository;
  private readonly storageService: StorageService;

  constructor() {
    this.postService = new PostService();
    this.principalsPostRepository = new PrincipalsPostRepository();
    this.storageService = new StorageService();
  }

  public async execute(data: CreatePostDTO): Promise<PostDocument> {
    const images = data?.media;
    const [banner] = data?.bannerImage;
    let urls: string[] = [];

    const bannerImage = await this.storageService.saveFile({
      file: banner.buffer,
      destination: "posts",
      fileName: `banner-${randomUUID()}.${banner?.mimeType?.split("/")[1]}`,
      mimetype: banner?.mimeType,
    });

    const urlMap = new Map<string, string>();

    if (images && images.length > 0) {
      const uploadTasks = images.map(async (file) => {
        const extension = file.mimeType.split("/")[1];
        const fileName = `post-${randomUUID()}.${extension}`;

        const publicUrl = await this.storageService.saveFile({
          file: file.buffer,
          destination: "posts",
          fileName,
          mimetype: file.mimeType,
        });

        urlMap.set(file.originalname, publicUrl);

        return publicUrl;
      });

      urls = await Promise.all(uploadTasks);
    }

    urlMap.forEach((newUrl, originalName) => {
      data.content = data.content.replace(originalName, newUrl);
    });

    const newPost: PostDocument = { ...data, bannerImage };

    const savedPost = await this.postService.savePost(newPost);

    const formattedPost = {
      id: savedPost._id,
      title: savedPost.title,
      initialText: savedPost.title,
      author: savedPost.author,
      media: { type: "image", url: savedPost.bannerImage, alt: savedPost.title },
      published_at: savedPost.published_at || new Date(),
      tag: { text: savedPost.tag.name, color: "#FF8000" }, // valor padrão
      categorie: savedPost.categorie,
      summary: savedPost.title,
    };

    await this.principalsPostRepository.addPostToLatestPosts(formattedPost);

    return savedPost;
  }
}
