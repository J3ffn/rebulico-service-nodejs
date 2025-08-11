import UserDocument from "../../../domain/entities/User.document";
import { UserRepository } from "../../../infra/repositories/User.repository";
import { HashService } from "../../../shared/utils/HashService";

export class RegisterUserUseCase {
  private readonly userRepository: UserRepository;
  private readonly hashService: HashService;

  constructor() {
    this.userRepository = new UserRepository();
    this.hashService = new HashService();
  }

  async execute(data: UserDocument): Promise<UserDocument | null> {
    const password = await this.hashService.hash(data.password);
    data.password = password;

    return await this.userRepository.save(data);
  }
}
