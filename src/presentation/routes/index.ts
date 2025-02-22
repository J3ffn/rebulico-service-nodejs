import { Router } from "express";
import postRouter from "./api/post.routes";
import principalsPostRouter from "./api/principalsPosts.routes";
import tagRouter from "./api/tagRouter.routes";

const routes = Router();

routes.use("/post", postRouter);
routes.use("/principals", principalsPostRouter);
routes.use("/tag", tagRouter);

routes.get("/health", (req: any, res: any) => {
  return res.send({ status: "Up" });
});

export default routes;
