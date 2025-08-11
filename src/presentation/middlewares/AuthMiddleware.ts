import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { HttpStatus } from "../../shared/constants/HttpStatus";
import buildError from "../../shared/utils/BuildError";
import logger from "../../shared/services/Logger";
import { jwtBlackList } from "../../infra/security/JwtBlackList";

interface AuthenticatedRequest extends Request {
  user?: any;
}

const secret = process.env.JWT_SECRET || "Xz#8h^Lr2!mPf@e1Qv$BnTz7UwA6Kd#Y";

export function AuthMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    const errorBuilder = buildError(
      new Error("Token não enviado."),
      HttpStatus.UNAUTHORIZED
    );
    logger.error(errorBuilder);
    res.status(HttpStatus.UNAUTHORIZED).json(errorBuilder);
    return;
  }

  const token = authHeader.split(" ")[1];

  if (jwtBlackList.isRevoked(token)) {
    const errorBuilder = buildError(
      new Error("Token inválido ou expirado."),
      HttpStatus.UNAUTHORIZED
    );
    logger.error(errorBuilder);
    res.status(HttpStatus.UNAUTHORIZED).json(errorBuilder);
    return;
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err: any) {
    const errorBuilder = buildError(
      new Error("Não autorizado: token inválido ou expirado."),
      HttpStatus.UNAUTHORIZED
    );
    logger.error(errorBuilder);
    res.status(HttpStatus.UNAUTHORIZED).json(errorBuilder);
  }
}
