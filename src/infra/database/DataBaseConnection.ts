import "dotenv";
import mongoose from "mongoose";
import logger from "../../shared/utils/Logger";

export default async function dataBaseConnection() {
  try {
    const uri = process.env.BD_URI ?? "";
    const config = { dbName: process.env.BD_NAME, autoCreate: true }
    await mongoose.connect(uri, config);

    logger.log("💾 DataBase connected!");
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}
