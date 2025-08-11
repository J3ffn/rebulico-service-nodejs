import { UserRepository } from "../../../infra/repositories/User.repository";
import { JwtService } from "../../../infra/security/JwtService";
import { HashService } from "../../../shared/utils/HashService";

export class LoginUserUseCase {
  private userRepository: UserRepository;
  private hashService: HashService;
  private jwtService: JwtService;

  constructor() {
    this.userRepository = new UserRepository();
    this.hashService = new HashService();
    this.jwtService = new JwtService();
  }

  async execute(
    email: string,
    password: string
  ): Promise<{
    token: string;
    userInfo: {
      _id?: string;
      username: string;
      email: string;
      roles: string[];
    };
  }> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    const valid = await this.hashService.compare(password, user.password);

    if (!valid) {
      throw new Error("Senha inválida.");
    }

    const token = this.jwtService.generateToken({
      _id: user._id,
      email: user.email,
      username: user.username,
      roles: user.roles,
    });

    return {
      token,
      userInfo: {
        _id: user._id,
        username: user.username,
        email: user.email,
        roles: user.roles,
      },
    };
  }
}
