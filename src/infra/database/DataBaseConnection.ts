import "dotenv";
import mongoose from "mongoose";

export default async function dataBaseConnection() {
  try {
    const uri = process.env.BD_URL ?? "";
    await mongoose.connect(uri, {
      dbName: "rebulico",
      autoCreate: true,
    });

    console.log("💾 DataBase connected!");
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}
