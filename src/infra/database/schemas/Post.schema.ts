import mongoose, { Schema } from "mongoose";
import PostDocument  from "../../../domain/entities/PostDocument";
import { PostStatus } from "../../../shared/constants/PostConstants";

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
        required: true,
      },
    },
    collaborators: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: 'Author', // Reutilizando o schema de autor
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
    ],
    read_time: {
      type: Number,
      required: true,
    },
    media: [
      {
        _id: false,
        type: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
        caption: {
          type: String,
        },
      },
    ],
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
