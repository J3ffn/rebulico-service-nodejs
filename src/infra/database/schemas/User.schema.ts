import mongoose, { Schema } from "mongoose";
import UserDocument from "../../../domain/entities/User.document";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [String], // Exemplo: ['author', 'admin', 'editor']
      default: ['user'],
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export { UserModel, userSchema };
