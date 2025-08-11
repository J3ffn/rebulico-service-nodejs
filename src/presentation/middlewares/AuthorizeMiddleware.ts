import { Request, Response, NextFunction, RequestHandler } from "express";
import buildError from "../../shared/utils/BuildError";
import { HttpStatus } from "../../shared/constants/HttpStatus";
import logger from "../../shared/services/Logger";

interface AuthorizedRequest extends Request {
  user: any;
}

export function AuthorizeMiddleware(...allowedRoles: string[]): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as AuthorizedRequest).user;

    if (!user) {
      const errorBuilder = buildError(
        new Error("Não autenticado."),
        HttpStatus.UNAUTHORIZED
      );
      logger.error(errorBuilder);
      res.status(HttpStatus.UNAUTHORIZED).json(errorBuilder);
      return;
    }

    const roles = user.roles;
    const hasRole = allowedRoles.some((role) => roles.includes(role));

    if (!hasRole) {
      const allowedRolesList = allowedRoles.join(", ");
      const errorBuilder = buildError(
        new Error(
          "Não autorizado. Somente usuários do grupo " +
            allowedRolesList +
            " são autorizados."
        ),
        HttpStatus.FORBIDDEN
      );
      logger.error(errorBuilder);
      res.status(HttpStatus.FORBIDDEN).json(errorBuilder);
      return;
    }

    next();
  };
}
