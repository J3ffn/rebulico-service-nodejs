import { json, urlencoded } from "express";
import cors from "cors";

export const configsExpress = [
  cors({ origin: "*" }),
  json({ limit: "10mb" }),
  urlencoded({ limit: "10mb", extended: true }),
];
