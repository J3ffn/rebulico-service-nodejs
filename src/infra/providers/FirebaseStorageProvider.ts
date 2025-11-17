import { SaveFileDTO, StorageProvider } from "../../application/providers/StorageProvider";
import { initializeApp, getApp, cert } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

const firebaseApp = () => {
  try {
    return getApp();
  } catch {
    const base64String = process.env.FIREBASE_SERVICE_ACCOUNT;
    const bucketName = process.env.FIREBASE_BUCKET_NAME;

    if (!base64String || !bucketName) {
      throw new Error("Firebase env vars (BASE64 or BUCKET_NAME) not set.");
    }

    const serviceAccountString = Buffer.from(base64String, "base64").toString("utf-8");
    const serviceAccount = JSON.parse(serviceAccountString);

    return initializeApp({
      credential: cert(serviceAccount),
      storageBucket: bucketName,
    });
  }
};

export class FirebaseStorageProvider implements StorageProvider {
  private bucket;

  constructor() {
    // Inicializa o app e pega o bucket
    const app = firebaseApp();
    this.bucket = getStorage(app).bucket();
  }

  async save({ file, destination, fileName, mimetype }: SaveFileDTO): Promise<string> {
    try {
      const filePath = `${destination}/${fileName}`;
      const fileRef = this.bucket.file(filePath);

      await fileRef.save(file, {
        public: true,
        metadata: { contentType: mimetype },
      });

      return fileRef.publicUrl();
    } catch (error: any) {
      console.error("ERRO NO UPLOAD:", error);
      throw new Error(`Falha no upload para o bucket ${error.message}`);
    }
  }

  async delete({ destination, fileName }: Omit<SaveFileDTO, "file">): Promise<void> {
    const filePath = `${destination}/${fileName}`;

    await this.bucket.file(filePath).delete();
  }
}
