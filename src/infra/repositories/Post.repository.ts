import PostDocument from "../../domain/entities/Post.document";
import { GenericRepository } from "../../domain/repositories/Generic.repository";
import { PostModel } from "../database/schemas/Post.schema";

export default class PostRepository implements GenericRepository<PostDocument> {
  async save(data: PostDocument): Promise<PostDocument> {
    const newPost = new PostModel({
      ...data,
    });

    return await newPost.save();
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
