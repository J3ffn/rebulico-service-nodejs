import { AuthController } from "../../controllers/Auth.controller";
import { Router } from "express";
import { AuthMiddleware } from "../../middlewares/AuthMiddleware";

const authController = new AuthController();

const authRouter = Router();

authRouter.post("/register", authController.register.bind(authController));
authRouter.post("/login", authController.login.bind(authController));
authRouter.post("/logout", AuthMiddleware, authController.logout.bind(authController));

export default authRouter;
