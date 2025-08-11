import { jwtBlackList } from "../../../infra/security/JwtBlackList";

export class LogoutUserUseCase {
  execute(token: string) {
    jwtBlackList.revoke(token);
  }
}
