import { Router } from "express";
import { AuthMiddleware } from "../../middlewares/AuthMiddleware";
import { AuthorizeMiddleware } from "../../middlewares/AuthorizeMiddleware";
import CategoryController from "../../controllers/Category.controller";

const categoryController = new CategoryController();

const categoryRouter = Router();

categoryRouter.get("/", categoryController.findAllCategory.bind(categoryController));
// postRouter.get("/:id", categoryController.findPostById.bind(categoryController));
categoryRouter.post(
  "/",
  AuthMiddleware,
  AuthorizeMiddleware("admin"),
  categoryController.create.bind(categoryController)
);

export default categoryRouter;
