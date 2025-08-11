import { Request, Response } from "express";
import { RegisterUserUseCase } from "../../application/useCases/auth/RegisterUser.useCase";
import { HttpStatus } from "../../shared/constants/HttpStatus";
import logger from "../../shared/services/Logger";
import buildError from "../../shared/utils/BuildError";
import { LoginUserUseCase } from "../../application/useCases/auth/LoginUser.useCase";
import { jwtBlackList } from "../../infra/security/JwtBlackList";

export class AuthController {
  private readonly registerUserUseCase: RegisterUserUseCase;
  private readonly loginUserUseCase: LoginUserUseCase;

  constructor() {
    this.registerUserUseCase = new RegisterUserUseCase();
    this.loginUserUseCase = new LoginUserUseCase();
  }

  async register(req: Request, res: Response): Promise<void> {
    const body = req.body;
    try {
      const userCreated = await this.registerUserUseCase.execute(body);
      res.status(HttpStatus.CREATED).json(userCreated);
    } catch (err: any) {
      const errorBuilded = buildError(err, HttpStatus.BAD_REQUEST);
      logger.error(err);
      res.status(HttpStatus.BAD_REQUEST).json(errorBuilded);
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    const body = req.body;

    try {
      const userLogged = await this.loginUserUseCase.execute(
        body.email,
        body.password
      );
      res.status(HttpStatus.OK).json(userLogged);
    } catch (err: any) {
      const errorBuilded = buildError(err, HttpStatus.UNAUTHORIZED);
      logger.error(err);
      res.status(HttpStatus.UNAUTHORIZED).json(errorBuilded);
    }
  }

  async logout(req: Request, res: Response): Promise<void> {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader?.startsWith("Bearer ")) {
      const errorBuilded = buildError(
        new Error("Token não enviado."),
        HttpStatus.UNAUTHORIZED
      );
      logger.error(errorBuilded);
      res.status(HttpStatus.UNAUTHORIZED).json(errorBuilded);
      return;
    }

    const token = authHeader.split(" ")[1];
    jwtBlackList.revoke(token);
    res
      .status(HttpStatus.OK)
      .json({ message: "Logout realizado com sucesso." });
  }
}
