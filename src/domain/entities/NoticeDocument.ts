import { UserTraceDocument } from './UserTraceDocument';
import { Document } from "mongoose";

interface NoticeAttributes {
  id: string;
  src: string;
  alt: string;
}

export interface NoticeDocument extends Document {
  attributes: NoticeAttributes;
  text: string;
  tags: string[];
  created_by: UserTraceDocument;
  updated_by: UserTraceDocument;
}