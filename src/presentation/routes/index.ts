import { Router } from "express";
import postRouter from "./api/post.routes";
import principalsPostRouter from "./api/principalsPosts.routes";

const routes = Router();

routes.use("/post", postRouter);
routes.use("/principals", principalsPostRouter);

routes.get("/health", (req: any, res: any) => {
  return res.send({ status: "Up" });
});

export default routes;
