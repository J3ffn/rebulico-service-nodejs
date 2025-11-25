import { PostStatus } from "../../shared/constants/PostConstants";
import { CategoryDocument } from "./Category.document";
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

interface PostDocument {
  title: string;
  author: Author;
  bannerImage: string;
  content: string;
  published_at: string;
  tag: TagDocument;
  status?: PostStatus;
  collaborators?: Collaborator[];
  categorie?: CategoryDocument;
  _id?: string;
}

export default PostDocument;
