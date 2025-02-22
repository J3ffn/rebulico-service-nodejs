export class TagDocument {
  _id: string;
  name: string;
  slug: string;
  description: string;

  constructor(_id: string, name: string, slug: string, description: string) {
    this._id = _id;
    this.name = name;
    this.slug = slug;
    this.description = description;
  }
}