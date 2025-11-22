import { SaveFileDTO } from "../../application/providers/StorageProvider";
import { FirebaseStorageProvider } from "../../infra/providers/FirebaseStorageProvider";

export class StorageService {
    private readonly storageProvider: FirebaseStorageProvider
    constructor() {
        this.storageProvider = new FirebaseStorageProvider();
    }

    async saveFile({ file, destination, fileName }: SaveFileDTO): Promise<string> {
        console.log("StorageProvider: ");
        return await this.storageProvider.save({ file, destination, fileName });
    }
}