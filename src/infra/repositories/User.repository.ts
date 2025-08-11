import UserDocument from "../../domain/entities/User.document";
import { GenericRepository } from "../../domain/repositories/Generic.repository";
import { UserModel } from "../database/schemas/User.schema";

export class UserRepository implements GenericRepository<UserDocument> {
  async save(data: UserDocument): Promise<UserDocument | null> {
    const newUser = new UserModel({ ...data });

    return await newUser.save();
  }

  async findAll(): Promise<UserDocument[] | null> {
    const users = UserModel.find();

    return await users;
  }

  async findById(id: string): Promise<UserDocument | null> {
    const user = UserModel.findById(id).exec();

    return await user;
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    const user = UserModel.findOne({ email }).exec();

    return await user;
  }
}
