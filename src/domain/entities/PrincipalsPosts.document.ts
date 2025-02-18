import { Document } from "mongoose";

class Author {
  constructor(
    public id: string,
    public name: string,
    public imageSrc?: string
  ) {}
}

class Media {
  constructor(public type: string, public url: string, public alt: string) {}
}

class Tag {
  constructor(public text: string, public color: string) {}
}

class NewsItem {
  constructor(
    public id: string,
    public title: string,
    public read_time: number,
    public media: Media,
    public published_at: Date,
    public tag: Tag,
    public categorie?: string,
    public summary?: string,
    public initialText?: string,
    public author?: Author
  ) {}
}

class Story {
  constructor(public name: string, public imageSrc: string) {}
}

class PrincipalsPostsDocument extends Document {
  constructor(
    public highlight: NewsItem,
    public latest_news: NewsItem[],
    public recent_updates: NewsItem[],
    public latest_posts: NewsItem[],
    public stories: Story[]
  ) {
    super();
  }
}

export default PrincipalsPostsDocument;
