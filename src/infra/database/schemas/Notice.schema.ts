import mongoose, { Schema } from "mongoose";
import { NoticeDocument } from "../../../domain/entities/NoticeDocument";
import { UserTraceSchema } from "./UserTrace.schema";

const noticeSchema: Schema = new Schema(
  {
    attributes: {
      type: {
        src: String,
        alt: String,
      },
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    tags: [{ type: String, required: true }],
    created_by: UserTraceSchema,
    updated_by: UserTraceSchema,
  },
  {
    timestamps: true, // Já cria o updated_at e created_at
    versionKey: false,
  }
);

const NoticeModel = mongoose.model<NoticeDocument>("Notice", noticeSchema);

export { NoticeModel, noticeSchema };
