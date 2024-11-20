import PostDocument from "./../entities/PostDocument";
import { GenericRepository } from "./GenericRepository";
import { PostModel } from "../../infra/database/schemas/Post.schema";

export default class PostRepository implements GenericRepository<PostDocument> {
  async save(data: PostDocument): Promise<void> {
    const newPost = new PostModel({
      ...data,
    });

    await newPost.save();
  }

  async findAll(): Promise<PostDocument[] | null> {
    const postDocuments = await PostModel.find();

    return postDocuments;
  }

  async findById(id: string): Promise<PostDocument | null> {
    const postDocument = await PostModel.findById(id).exec();

    return postDocument;
  }
}
