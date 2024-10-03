import mongoose, { Schema } from "mongoose";
import { UserDocument } from "../../../domain/entities/UserDocument";
import { UserTraceSchema } from "./UserTrace.schema";

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      require: true,
    },
    name: {
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

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export { UserModel, userSchema };
