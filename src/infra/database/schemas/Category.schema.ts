import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  color: { type: String },
  description: { type: String }
}, { timestamps: true });

const CategoryModel = mongoose.model("Category", CategorySchema);

export { CategoryModel, CategorySchema };