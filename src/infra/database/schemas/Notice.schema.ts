import mongoose, { Schema } from "mongoose";
import { NoticeDocument } from "../../../domain/entities/NoticeDocument";

const tagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TagModel = mongoose.model<NoticeDocument>("Tag", tagSchema);

export { TagModel, tagSchema };
