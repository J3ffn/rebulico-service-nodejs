import mongoose, { Schema } from "mongoose";
import AuthorDocument from "../../../domain/entities/Author.document";

// SubDocumento
const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profile_image: {
      type: String,
    },
    bio: {
      type: String,
    },
    social_links: [
      {
        platform: String,
        url: String,
      },
    ],
    collaborations: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post', // Relacionando a outros posts que o autor colaborou
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const authorModel = mongoose.model<AuthorDocument>("Author", authorSchema);

export { authorModel, authorSchema };