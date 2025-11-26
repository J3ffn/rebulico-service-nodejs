import mongoose, { Schema } from "mongoose";
import PostDocument  from "../../../domain/entities/Post.document";
import { PostStatus } from "../../../shared/constants/PostConstants";
import { CategorySchema } from "./Category.schema";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    categorie: CategorySchema,
    author: {
      id: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      profile_image: {
        type: String,
        required: false,
      },
    },
    collaborators: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    bannerImage: {
      type: String,
      require: true
    },
    status: {
      type: String,
      enum: [...Object.values(PostStatus)],
      required: true,
    },
    published_at: {
      type: Date,
      required: true,
    },
    tag: {
      _id: {
        type: Schema.Types.ObjectId,
        ref: 'Tag', // Referência à coleção de Tags
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true, // Cria automaticamente createdAt e updatedAt
    versionKey: false,
  }
);

const PostModel = mongoose.model<PostDocument>("Post", postSchema);

export { PostModel, postSchema };
