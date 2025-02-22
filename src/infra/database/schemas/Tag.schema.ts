import mongoose, { Schema } from "mongoose";
import { TagDocument } from "../../../domain/entities/Tag.document";

const TagSchema = new Schema<TagDocument>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true }
});

const TagModel = mongoose.model<TagDocument>("tags", TagSchema);

export default TagModel