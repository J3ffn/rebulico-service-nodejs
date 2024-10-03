import { Schema } from "mongoose";

// SubDocumento
export const UserTraceSchema: any = {
  name: {
    type: String,
    require: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
};
