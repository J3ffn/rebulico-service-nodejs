export class CategoryDocument {
  _id?: string | any;
  name: string;
  slug: string;
  color?: string | any;
  description?: string | any;

  constructor(name: string, slug: string, description?: string, _id?: string, color?: string) {
    this._id = _id;
    this.name = name;
    this.slug = slug;
    this.color = color;
    this.description = description;
  }
}
