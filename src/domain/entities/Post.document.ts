import { PostStatus } from "../../shared/constants/PostConstants";
import { TagDocument } from "./Tag.document";

export class Media {
  url: string;
  originalname: string;
  mimeType: string;
  caption?: string;

  constructor(url: string, originalname: string, mimeType: string, caption?: string) {
    this.url = url;
    this.originalname = originalname;
    this.mimeType = mimeType;
    if (caption) this.caption = caption;
  }
}

export class Author {
  id: string;
  name: string;
  profile_image: string;

  constructor(id: string, name: string, profile_image: string) {
    this.id = id;
    this.name = name;
    this.profile_image = profile_image;
  }
}

export class Collaborator {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export default class PostDocument {
  constructor(
    public title: string,
    public author: Author,
    public bannerImage: string,
    public content: string,
    public published_at: string,
    public tag: TagDocument,
    public status?: PostStatus,
    public collaborators?: Collaborator[],
    public categorie?: string
  ) {}
}
