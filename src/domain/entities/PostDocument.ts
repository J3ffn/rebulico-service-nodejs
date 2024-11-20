export class Media {
  type: string;
  url: string;
  caption?: string

  constructor(type: string, url: string, caption?: string) {
    this.type = type;
    this.url = url;
    if (caption) this.caption = caption;
  }
}

export class Tag {
  _id: string;
  name: string;
  slug: string;

  constructor(_id: string, name: string, slug: string) {
    this._id = _id;
    this.name = name;
    this.slug = slug;
  }
}

export class Author {
  id: string;
  name: string;
  profile_image: string

  constructor(id: string, name: string, profile_image: string) {
    this.id = id;
    this.name = name;
    this.profile_image = profile_image;
  }
}

export class Collaborator {
  id: string;
  name: string

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export default class PostDocument {
  title: string;
  author: Author;
  collaborators?: Collaborator[]
  read_time: number;
  media: Media[];
  status: string;
  content: string;
  published_at: string;
  tag: Tag;

  constructor(
    title: string,
    author: Author,
    read_time: number,
    media: Media[],
    status: string,
    content: string,
    published_at: string,
    tag: Tag,
    collaborators?: Collaborator[]
  ) {
    this.title = title;
    this.author = author;
    this.read_time = read_time;
    this.media = media;
    this.status = status;
    this.content = content;
    this.published_at = published_at;
    this.tag = tag;
    if (collaborators) this.collaborators = collaborators;
  }
}
