export class Media {
  type: string;
  url: string;
  caption?: string;

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
    public read_time: number,
    public media: Media[],
    public status: string,
    public content: string,
    public published_at: string,
    public tag: Tag,
    public collaborators?: Collaborator[]
  ) {}
}
