import { GenericRepository } from "../../domain/repositories/Generic.repository";
import PrincipalsPostsDocument from "../../domain/entities/PrincipalsPosts.document";
import { PrincipalsPostsModel } from "../database/schemas/PrincipalsPosts.schema";

export default class PrincipalsPostRepository
  implements GenericRepository<PrincipalsPostsDocument>
{
  async save(data: PrincipalsPostsDocument): Promise<PrincipalsPostsDocument> {
    const newPrincipalsPostDocuments = new PrincipalsPostsModel({
      ...data,
    });

    return await newPrincipalsPostDocuments.save();
  }

  async addPostToLatestPosts(post: any): Promise<any> {
    const principalsPost = await PrincipalsPostsModel.findOne();

    if(!principalsPost) {
      return;
    }

    if (principalsPost.latest_posts.length > 0) {
      principalsPost.latest_posts.pop();
    }

    principalsPost.latest_posts.unshift(post);

    return await principalsPost.save();
  }

  async findAll(): Promise<PrincipalsPostsDocument[] | null> {
    const principalsPostDocuments = await PrincipalsPostsModel.find();
    
    return principalsPostDocuments;
  }

  async findOne(): Promise<PrincipalsPostsDocument | null> {
    const principalsPostDocuments = await PrincipalsPostsModel.findOne();
    
    return principalsPostDocuments;
  }

  async findById(id: string): Promise<PrincipalsPostsDocument | null> {
    const principalsPostDocuments = await PrincipalsPostsModel.findById(
      id
    ).exec();

    return principalsPostDocuments;
  }
}
