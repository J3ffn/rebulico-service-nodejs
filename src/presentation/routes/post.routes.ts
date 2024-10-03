import PostController from "./../controllers/PostController";
import { Router } from "express";

const postController = new PostController();

const postRouter = Router();

postRouter.post("/", postController.create.bind(postController));
postRouter.get("/", postController.findAllPosts.bind(postController));
postRouter.get("/:id", postController.findPostById.bind(postController));

export default postRouter;
