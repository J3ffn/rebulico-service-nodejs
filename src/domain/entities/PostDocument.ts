import { Document } from "mongoose";
import { UserTraceDocument } from "./UserTraceDocument";

export class PostDocument {
  constructor(
    public title: String,
    public content: String,
    public author_id: String,
    public created_by: UserTraceDocument,
    public updated_by?: UserTraceDocument
  ) {}
}
