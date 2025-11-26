import PostController from "../../controllers/Post.controller";
import { Router } from "express";
import { AuthMiddleware } from "../../middlewares/AuthMiddleware";
import { AuthorizeMiddleware } from "../../middlewares/AuthorizeMiddleware";
import multer from "multer";

const postController = new PostController();

const postRouter = Router();

const upload = multer({
  storage: multer.memoryStorage(),
})

postRouter.get("/", postController.findAllPosts.bind(postController));
postRouter.get("/:id", postController.findPostById.bind(postController));
postRouter.get("/category/:slug", postController.findPostByCategory.bind(postController));
postRouter.post(
  "/",
  AuthMiddleware,
  AuthorizeMiddleware("admin", "author"),
  upload.fields([{ name: "images" }, { name: "banner", maxCount: 1 }]),
  postController.create.bind(postController)
);

export default postRouter;
