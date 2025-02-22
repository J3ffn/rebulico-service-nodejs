import { GenericRepository } from "../../domain/repositories/Generic.repository";
import PrincipalsPostsDocument from "../../domain/entities/PrincipalsPosts.document";
import { PrincipalsPostsModel } from "../database/schemas/PrincipalsPosts.schema";

export default class PrincipalsPostRepository
  implements GenericRepository<PrincipalsPostsDocument>
{
  async save(data: PrincipalsPostsDocument): Promise<void> {
    const newPrincipalsPostDocuments = new PrincipalsPostsModel({
      ...data,
    });

    await newPrincipalsPostDocuments.save();
  }

  async findAll(): Promise<PrincipalsPostsDocument[] | null> {
    const principalsPostDocuments = await PrincipalsPostsModel.find();
    
    return principalsPostDocuments;
  }

  async findById(id: string): Promise<PrincipalsPostsDocument | null> {
    const principalsPostDocuments = await PrincipalsPostsModel.findById(
      id
    ).exec();

    return principalsPostDocuments;
  }
}
