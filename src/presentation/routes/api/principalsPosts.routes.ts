import { Router } from "express";
import PrincipalsPostController from "../../controllers/PrincipalsPosts.controller";

const principalsPostController = new PrincipalsPostController();

const principalsPostRouter = Router();

principalsPostRouter.get("/posts", principalsPostController.findPrincipalsPosts.bind(principalsPostController));

export default principalsPostRouter;
