import PostController from "../../controllers/Post.controller";
import { Router } from "express";
import { AuthMiddleware } from "../../middlewares/AuthMiddleware";
import { AuthorizeMiddleware } from "../../middlewares/AuthorizeMiddleware";

const postController = new PostController();

const postRouter = Router();

postRouter.get("/", postController.findAllPosts.bind(postController));
postRouter.get("/:id", postController.findPostById.bind(postController));
postRouter.post(
  "/",
  AuthMiddleware,
  AuthorizeMiddleware("admin", "author"),
  postController.create.bind(postController)
);

export default postRouter;
