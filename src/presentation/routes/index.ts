import { Router } from "express";
import postRouter from "./post.routes";

const routesMapped = Router();

routesMapped.use("/post", postRouter);

routesMapped.get("/health", (req: any, res: any) => {
  return res.send({ status: "Up" });
});

export default routesMapped;
