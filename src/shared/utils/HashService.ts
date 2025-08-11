import bcrypt from "bcrypt";

export class HashService {
  async hash(password: string) {
    return await bcrypt.hash(password, 10);
  }

  async compare(password: string, hashed: string) {
    return await bcrypt.compare(password, hashed);
  }
}
