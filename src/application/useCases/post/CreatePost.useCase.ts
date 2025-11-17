import { randomUUID } from "crypto";
import PostDocument from "../../../domain/entities/Post.document";
import PostService from "../../../domain/services/Post.service";
import CreatePostDTO from "../../dto/post/CreatePostDTO";
import { StorageService } from "../../../domain/services/Storage.service";

export class CreatePostUsecase {
  private readonly postService: PostService;
  private readonly storageService: StorageService;

  constructor() {
    this.postService = new PostService();
    this.storageService = new StorageService();
  }
  
  public async execute(data: CreatePostDTO): Promise<PostDocument> {
    const images = data?.media;
    const [banner] = data?.bannerImage;
    let urls: string[] = [];

    console.log(banner);

    const bannerImage = await this.storageService.saveFile({
      file: banner.buffer,
      destination: "posts",
      fileName: `banner-${randomUUID()}.${banner?.mimeType?.split("/")[1]}`,
      mimetype: banner?.mimeType
    })

    const urlMap = new Map<string, string>();

    if(images && images.length > 0) {
      const uploadTasks = images.map(async (file) => {
        const extension = file.mimeType.split("/")[1];
        const fileName = `post-${randomUUID()}.${extension}`;

        const publicUrl = await this.storageService.saveFile({
          file: file.buffer,
          destination: "posts",
          fileName,
          mimetype: file.mimeType
        });

        urlMap.set(file.originalname, publicUrl);

        return publicUrl;
      })

      urls = await Promise.all(uploadTasks);
    }

    urlMap.forEach((newUrl, originalName) => {
      data.content = data.content.replace(originalName, newUrl);
    })

    const newPost: PostDocument = { ...data, bannerImage, categorie: "ufpb-pelo-avesso" };

    return await this.postService.savePost(newPost);
  }
}
