import { json } from "express";
import cors from "cors";

export const configsExpress = [cors({ origin: "*" }), json()];
