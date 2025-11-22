export interface SaveFileDTO {
  file: Buffer;
  destination: string;
  fileName: string;
  mimetype?: string;
}

export interface StorageProvider {
  save(data: SaveFileDTO): Promise<string>;
  delete(data: Omit<SaveFileDTO, "file">): Promise<void>;
}
