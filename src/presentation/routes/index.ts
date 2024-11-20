import { Router } from "express";
import postRouter from "./api/post.routes";

const routes = Router();

routes.use("/post", postRouter);

routes.get("/health", (req: any, res: any) => {
  return res.send({ status: "Up" });
});

export default routes;
