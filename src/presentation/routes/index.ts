import { Router } from "express";
import postRouter from "./api/post.routes";
import principalsPostRouter from "./api/principalsPosts.routes";
import tagRouter from "./api/tagRouter.routes";
import authRouter from "./api/auth.routes";
import categoryRouter from "./api/category.routes";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/post", postRouter);
routes.use("/principals", principalsPostRouter);
routes.use("/tag", tagRouter);
routes.use("/category", categoryRouter);

routes.get("/health", (req: any, res: any) => {
  return res.send({ status: "Up" });
});

export default routes;
