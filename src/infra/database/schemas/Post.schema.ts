import mongoose, { Schema } from "mongoose";
import { UserTraceSchema } from "./UserTrace.schema";
import { PostDocument } from "../../../domain/entities/PostDocument";

const postSchema: Schema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    author_id: {
      type: String,
      require: true,
    },
    created_by: UserTraceSchema,
    updated_by: UserTraceSchema,
  },
  {
    timestamps: true, // Já cria o updated_at e created_at
    versionKey: false,
  }
);

const PostModel = mongoose.model<PostDocument>("Post", postSchema);

export { PostModel, postSchema };
