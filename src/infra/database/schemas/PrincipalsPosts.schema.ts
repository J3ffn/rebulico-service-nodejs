import mongoose, { Schema } from "mongoose";
import PrincipalsPostsDocument from "../../../domain/entities/PrincipalsPosts.document";

interface Author {
  id: string;
  name: string;
  imageSrc?: string;
}

interface Media {
  type: string;
  url: string;
  alt: string;
}

interface Tag {
  text: string;
  color: string;
}

interface News {
  id: string;
  title: string;
  initialText?: string;
  author?: Author;
  read_time: number;
  media: Media;
  published_at: Date;
  tag: Tag;
  categorie?: string;
  summary?: string;
}

interface Story {
  name: string;
  imageSrc: string;
}

const AuthorSchema = new Schema<Author>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  imageSrc: { type: String },
});

const MediaSchema = new Schema<Media>({
  type: { type: String, required: true },
  url: { type: String, required: true },
  alt: { type: String, required: true },
});

const TagSchema = new Schema<Tag>({
  text: { type: String, required: true },
  color: { type: String, required: true },
});

const PrincipalsPostsSchema = new Schema<News>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  initialText: { type: String },
  author: { type: AuthorSchema },
  read_time: { type: Number, required: true },
  media: { type: MediaSchema, required: true },
  published_at: { type: Date, required: true },
  tag: { type: TagSchema, required: true },
  categorie: { type: String },
  summary: { type: String },
});

const StorySchema = new Schema<Story>({
  name: { type: String, required: true },
  imageSrc: { type: String, required: true },
});

const PrincipalsPostsModelSchema = new Schema<PrincipalsPostsDocument>({
  highlight: { type: PrincipalsPostsSchema, required: true },
  latest_news: { type: [PrincipalsPostsSchema], required: true },
  recent_updates: { type: [PrincipalsPostsSchema], required: true },
  latest_posts: { type: [PrincipalsPostsSchema], required: true },
  stories: { type: [StorySchema], required: true },
});

const PrincipalsPostsModel = mongoose.model<PrincipalsPostsDocument>(
  "principals-posts",
  PrincipalsPostsModelSchema
);

export { PrincipalsPostsModel, PrincipalsPostsModelSchema as PrincipalsPostsSchema };
