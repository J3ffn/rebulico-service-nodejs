import { Router } from "express";
import PrincipalsPostController from "../../controllers/PrincipalsPosts.controller";
import TagController from "../../controllers/Tag.controller";

const tagController = new TagController();

const tagRouter = Router();

tagRouter.post("/", tagController.create.bind(tagController));
tagRouter.get("/", tagController.findAllTags.bind(tagController));
tagRouter.get("/:id", tagController.findTagById.bind(tagController));

export default tagRouter;
