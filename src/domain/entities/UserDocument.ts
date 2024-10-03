import { Document } from "mongoose";

export interface UserDocument extends Document {
  id: String;
  email: String;
  name: String;
}
